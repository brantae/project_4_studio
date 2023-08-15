class Lesson < ApplicationRecord
    belongs_to :teacher 
    belongs_to :user

    validates :room_num, :start_time, presence: true
    validate :valid_start_time

    private

    def valid_start_time
        start_hour = start_time.hour
            if start_hour < 6 || start_hour >= 21
            errors.add(:start_time, "should be between 6 AM and 9 PM")
            end
        end
    end