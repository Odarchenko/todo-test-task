RSpec.describe TaskSerializer, type: :serializer do
  let(:task) { create(:task, title: 'Test Task', description: 'This is a test task', completed: false) }
  let(:serialized_task) { TaskSerializer.new(task).serializable_hash }

  it 'serializes the task attributes' do
    expect(serialized_task).to include(
      id: task.id,
      title: 'Test Task',
      description: 'This is a test task',
      completed: false
    )
  end
end
