require 'rails_helper'

RSpec.describe "Api::V1::Tasks", type: :request do
  let(:valid_headers) {
    { "ACCEPT" => "application/json" }
  }

  describe "GET /api/v1/tasks" do
    let!(:tasks) { create_list(:task, 3, completed: false) }  # Use let! to ensure creation

    before do
      get "/api/v1/tasks", headers: valid_headers
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns all tasks" do
      json_response = JSON.parse(response.body)
      expect(json_response.size).to eq(3)
      expect(json_response.map { |t| t["id"] }).to match_array(tasks.map(&:id))
    end
  end


  describe "POST /api/v1/tasks" do
    let(:valid_attributes) { { task: attributes_for(:task, completed: false) } }
    let(:invalid_attributes) { { task: attributes_for(:task, title: nil, completed: false) } }

    context "with valid parameters" do
      it "returns http created and creates a new Task" do
        expect {
          post "/api/v1/tasks", params: valid_attributes, headers: valid_headers
        }.to change(Task, :count).by(1)

        expect(response).to have_http_status(:created)
        json_response = JSON.parse(response.body)
        expect(json_response["title"]).to eq(valid_attributes[:task][:title])
      end
    end

    context "with invalid parameters" do
      it "returns http unprocessable entity and does not create a Task" do
        expect {
          post "/api/v1/tasks", params: invalid_attributes, headers: valid_headers
        }.not_to change(Task, :count)

        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response).to have_key("errors")
      end
    end
  end

  describe "PATCH /api/v1/tasks/:id" do
    let!(:task) { create(:task, completed: false) }
    let(:new_attributes) { { task: { title: "Updated Title" } } }

    context "with valid parameters" do
      it "updates the task and returns success" do
        patch "/api/v1/tasks/#{task.id}", params: new_attributes, headers: valid_headers

        expect(response).to have_http_status(:success)
        json_response = JSON.parse(response.body)
        expect(json_response["title"]).to eq("Updated Title")
        expect(task.reload.title).to eq("Updated Title")
      end
    end

    context "with invalid parameters" do
      it "returns unprocessable entity and error messages" do
        patch "/api/v1/tasks/#{task.id}",
          params: { task: { title: nil } },
          headers: valid_headers

        expect(response).to have_http_status(:unprocessable_entity)
        json_response = JSON.parse(response.body)
        expect(json_response).to have_key("errors")
      end
    end
  end

  describe "DELETE /api/v1/tasks/:id" do
    let!(:task) { create(:task, completed: false) }

    context "when the task exists" do
      before { delete "/api/v1/tasks/#{task.id}", headers: valid_headers }

      it "returns http no content" do
        expect(response).to have_http_status(:no_content)
      end

      it "deletes the task" do
        expect(Task.count).to eq(0)
      end
    end

    context "when the task doesn't exist" do
      before { delete "/api/v1/tasks/0", headers: valid_headers }

      it "returns http not found" do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
