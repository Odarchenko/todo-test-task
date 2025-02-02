module Api
  module V1
    class TasksController < ApplicationController
      rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

      before_action :set_task, only: [ :update, :destroy ]

      def index
        tasks = Task.all.order(completed: :asc)

        render json: tasks, each_serializer: TaskSerializer, status: :ok
      end

      def create
        task = ::CreateTaskService.new(task_params).call

        if task.errors.empty?
          render json: TaskSerializer.new(task).serializable_hash, status: :created
        else
          render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @task.update(task_params)
          render json: TaskSerializer.new(@task).serializable_hash, status: :ok
        else
          render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @task.destroy

        head :no_content
      end

      private

      def set_task
        @task = Task.find(params[:id])
      end

      def task_params
        params.require(:task).permit(:title, :description, :completed)
      end

      def record_not_found
        render json: { errors: "Task not found" }, status: :not_found
      end
    end
  end
end
