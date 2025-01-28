class CreateTaskService
  def initialize(task_params)
    @task_params = task_params
  end

  # Created service to add possibility to modify any custom validations or logic without changing the controller
  def call
    task = build_task
    task.save

    task
  end

  private

  attr_reader :task_params

  def build_task
    Task.new(task_params)
  end
end
