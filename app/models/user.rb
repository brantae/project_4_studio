class User < ApplicationRecord
    has_secure_password
    
    has_many :lessons
    has_many :teachers, through: :lessons

    validates :name, :password, presence: true
    validates :username, presence: true
    validates :username, uniqueness: {
        message: "is already taken"
    }


end
