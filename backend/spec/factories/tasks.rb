FactoryBot.define do
  factory :task do
    title { "Sample Task" }
    description { "This is a sample task description" }
    completed { false }

    trait :completed do
      completed { true }
    end
  end
end
