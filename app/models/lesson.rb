class Lesson < ApplicationRecord
    belongs_to :teacher 
    belongs_to :user

    validates :room_num, :start_time, presence: true
end
