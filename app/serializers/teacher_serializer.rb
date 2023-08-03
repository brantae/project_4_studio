class TeacherSerializer < ActiveModel::Serializer
    attributes :id, :name, :specialty, :description
    
    has_many :users 
    has_many :lessons
end