class LessonSerializer < ActiveModel::Serializer
    attributes :id, :room_num, :start_time, :repeat, :class_length, :user_id, :teacher_id

    has_one :teacher 
    has_one :user
end