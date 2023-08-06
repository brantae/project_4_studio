class Teacher < ApplicationRecord
    has_many :lessons, dependent: :destroy
    has_many :users, through: :lessons

    validates :name, :specialty, :description, presence: true
end
