class LessonSerializer < ActiveModel::Serializer
    attributes :id, :room_num, :start_time, :repeat, :class_length, :user_id, :teacher_id

    belongs_to :teacher, serializer: TeacherSerializer 
    belongs_to :user
end