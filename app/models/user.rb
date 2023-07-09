class User < ApplicationRecord
    has many :lessons
    has many :teachers, through: :lessons
end
