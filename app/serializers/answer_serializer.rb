class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :created_at, :access

  has_many :comments

  def access
    scope.can?(:access, object)
  end
end
