class Task < ApplicationRecord
  validates :title, presence: true, length: { in: 4..80 }
  validates :description, presence: true

  validates :completed, inclusion: { in: [ true, false ] }
end
