class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :access
end

def access
  scope.can?(:access, object)
end
