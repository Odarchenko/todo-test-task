class Task < ApplicationRecord
  validates :title, presence: true, length: { in: 4..80 }
  validates :description, presence: true, length: { in: 10..200 }

  validates :completed, inclusion: { in: [ true, false ] }
end
