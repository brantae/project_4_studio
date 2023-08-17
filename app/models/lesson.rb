class Lesson < ApplicationRecord
    belongs_to :teacher 
    belongs_to :user

    validates :room_num, :start_time, presence: true
    validate :valid_start_time

    def username 
        self.user.name
    end

    def teacher_name
        self.teacher.name
    end


    #validates lesson.start_time to only be between 6 AM and 9 PM
    def valid_start_time
        start_hour = start_time.hour
            if start_hour < 6 || start_hour >= 21
            errors.add(:start_time, "should be between 6 AM and 9 PM")
            end
        end
    end