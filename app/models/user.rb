class User < ApplicationRecord
    has_secure_password
    
    has_many :lessons
    has_many :teachers, through: :lessons

    validates :name, :password, presence: true
    validates :username, presence: true, format: { 
        with: /\A[\w+\-.]+@[\w\-.]+\.com\z/i, message: "is not a valid email address" 
    }
    validates :username, uniqueness: {
        message: "username is already taken"
    }


end
