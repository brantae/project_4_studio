class Lesson < ApplicationRecord
    belongs_to :teacher 
    belongs_to :user

    validates :room_num, :start_time, :user_id, :teacher_id, presence: true
end
