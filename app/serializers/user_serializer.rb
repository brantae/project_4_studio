class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username

    has_many :lessons
    has_many :teachers

end