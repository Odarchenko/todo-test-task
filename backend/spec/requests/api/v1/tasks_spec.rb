# backend/spec/integration/tasks_spec.rb
require 'swagger_helper'

RSpec.describe 'API V1 Tasks', type: :request do
  path '/api/v1/tasks' do
    get 'Retrieves all tasks' do
      tags 'Tasks'
      produces 'application/json'

      response '200', 'tasks found' do
        schema type: :array, items: {
          type: :object,
          properties: {
            id: { type: :integer },
            title: { type: :string },
            description: { type: :string },
            completed: { type: :boolean }
          },
          required: [ 'id', 'title', 'description', 'completed' ]
        }

        run_test!
      end
    end

    post 'Creates a task' do
      tags 'Tasks'
      consumes 'application/json'
      parameter name: :task, in: :body, schema: {
        type: :object,
        properties: {
          title: { type: :string },
          description: { type: :string },
          completed: { type: :boolean }
        },
        required: [ 'title', 'description' ]
      }

      response '201', 'task created' do
        let(:task) { { title: 'New Task', description: 'Task description', completed: false } }
        run_test!
      end

      response '422', 'invalid request' do
        let(:task) { { title: nil } }
        run_test!
      end
    end
  end

  path '/api/v1/tasks/{id}' do
    parameter name: :id, in: :path, type: :integer

    patch 'Updates a task' do
      tags 'Tasks'
      consumes 'application/json'
      parameter name: :task, in: :body, schema: {
        type: :object,
        properties: {
          title: { type: :string },
          description: { type: :string },
          completed: { type: :boolean }
        }
      }

      response '200', 'task updated' do
        let(:id) { Task.create(title: 'Test Task', description: 'Test Description', completed: false).id }
        let(:task) { { title: 'Updated Task' } }
        run_test!
      end

      response '404', 'task not found' do
        let(:id) { 'invalid' }
        let(:task) { { title: 'Updated Task' } }
        run_test!
      end
    end

    delete 'Deletes a task' do
      tags 'Tasks'

      response '204', 'task deleted' do
        let(:id) { Task.create(title: 'Test Task', description: 'Test Description', completed: false).id }
        run_test!
      end

      response '404', 'task not found' do
        let(:id) { 'invalid' }
      end
    end
  end
end
