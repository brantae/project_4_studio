class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :password_digest

    has_many :lessons
    has_many :teachers

end