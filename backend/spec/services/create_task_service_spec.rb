require 'rails_helper'

RSpec.describe CreateTaskService do
  describe '#call' do
    let(:subject) { CreateTaskService.new(params).call }

    context 'when the parameters are valid' do
      let(:params)       { { title: 'New Task', description: 'Task description', completed: false  } }
      let(:created_task) { Task.last }

      it 'creates a new task' do
        expect { subject }.to change(Task, :count).by(1)
      end

      it 'returns the created task object' do
        expect(subject).to eq(created_task)
      end

      it 'returns the created task object' do
        created_task = subject
        expect(created_task).to be_a(Task)
        expect(created_task.title).to eq('New Task')
        expect(created_task.description).to eq('Task description')
        expect(created_task.completed).to be_falsey
      end
    end

    context 'when the parameters are invalid' do
      let(:params) { { title: '', description: 'Task description', completed: false  } }

      it 'does not create a task and returns the task object with errors' do
        task = subject
        expect(task).to be_a(Task)
        expect(task.errors.full_messages).to include("Title can't be blank")
        expect(Task.count).to eq(0)  # Ensure no task was created
      end
    end
  end
end
