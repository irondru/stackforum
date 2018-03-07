class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :created_at, :access

  def access
    scope.can?(:access, object)
  end
end
