class Teacher < ApplicationRecord
    has many :lessons 
    has many :students, through: :lessons
end
