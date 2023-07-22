class User < ApplicationRecord
    has_secure_password
    
    has_many :lessons
    has_many :teachers, through: :lessons

    validates :name, presence: true
    validates :username, presence: true
    validates :password, presence: true


end
