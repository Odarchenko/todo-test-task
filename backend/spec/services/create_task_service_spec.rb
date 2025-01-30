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

      it 'creates a task with the correct attributes' do
        subject

        expect(created_task).to have_attributes(
          title: 'New Task',
          description: 'Task description',
          completed: false
        )
      end
    end

    context 'when the parameters are invalid' do
      let(:params) { { title: '', description: 'Task description', completed: false  } }

      it 'does not create a task' do
        expect { subject }.not_to change(Task, :count)
      end

      it 'returns the task object with errors' do
        expect(subject).to be_a(Task)
        expect(subject.errors.full_messages).to include("Title can't be blank")
      end
    end
  end
end
