class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :created_at, :access, :comments

  #has_many :comments, each_serialiser: CommentSerializer #its not working, wtf?

  def access
    scope.can?(:access, object)
  end

  def comments
    object.comments.map { |comment| CommentSerializer.new(comment) }
  end
end
