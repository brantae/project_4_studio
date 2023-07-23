class Lesson < ApplicationRecord
    belongs_to :teacher 
    belongs_to :user

    validates :name, presence: true
end
