class User < ApplicationRecord
    has_secure_password
    
    has_many :lessons
    has_many :teachers, through: :lessons

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true


end
