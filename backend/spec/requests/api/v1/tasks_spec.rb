RSpec.describe 'Tasks API', type: :request do
  let(:task_id) { tasks.first.id }

  describe 'GET /api/v1/tasks' do
    let!(:task_a) { create(:task, title: 'Task A', description: 'Task A description', completed: false) }
    let!(:task_b) { create(:task, title: 'Task B', description: 'Task B description', completed: false) }
    let!(:task_c) { create(:task, title: 'Task C', description: 'Task C description', completed: false) }

    before { get '/api/v1/tasks' }

    it 'returns tasks' do
      parsed_json = JSON.parse(response.body)

      expect(response).to have_http_status(:ok)
      expect(parsed_json.size).to eq(3)
      expect(parsed_json).to eq([
        {
          "id" => task_a.id,
          "title" => 'Task A',
          "description" => 'Task A description',
          "completed" => false
        },
        {
          "id" => task_b.id,
          "title" => 'Task B',
          "description" => 'Task B description',
          "completed" => false
        },
        {
          "id" => task_c.id,
          "title" => 'Task C',
          "description" => 'Task C description',
          "completed" => false
        }
      ])
    end
  end

  describe 'POST /api/v1/tasks' do
    context 'when the request is valid' do
      let(:params) { { task: { title: 'New Task', description: 'Task description' } } }

      before { post '/api/v1/tasks', params: params }

      it 'creates a task' do
        parsed_json = JSON.parse(response.body)

        expect(response).to have_http_status(:created)
        expect(parsed_json).to eq({
          "id" => Task.last.id,
          "title" => 'New Task',
          "description" => 'Task description',
          "completed" => false
        })
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/tasks', params: { task: { title: '', description: 'Task description' } } }

      it 'returns a validation failure message' do
        parsed_json = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(parsed_json['errors']).to include("Title can't be blank")
      end
    end
  end

  describe 'PUT /api/v1/tasks/:id' do
    let(:task) { create(:task) }
    let(:params) { { task: { title: 'Updated Task' } } }

    context 'when the task exists' do
      before { put "/api/v1/tasks/#{task.id}", params: params }

      it 'updates the task' do
        parsed_json = JSON.parse(response.body)

        expect(response).to have_http_status(:ok)
        expect(parsed_json).to eq({
          "id" => task.id,
          "title" => 'Updated Task',
          "description" => task.description,
          "completed" => task.completed
        })
      end
    end

    context 'when the task does not exist' do
      let(:task_id) { 0 }

      before { put "/api/v1/tasks/#{task_id}", params: params }

      it 'returns a not found message' do
        parsed_json = JSON.parse(response.body)

        expect(response).to have_http_status(:not_found)
        expect(parsed_json['errors']).to include("Task not found")
      end
    end
  end

  describe 'DELETE /api/v1/tasks/:id' do
    let(:task) { create(:task) }

    before { delete "/api/v1/tasks/#{task.id}" }

    it 'deletes the task' do
      expect(response).to have_http_status(:no_content)
    end
  end
end
