class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :author, :score, :access, :comments, :attachments

  #has_many :comments, each_serialiser: CommentSerializer #its not working, wtf?

  def access
    scope.can?(:access, object)
  end

  def author
    {
      id: object.user.id,
      name: object.user.name,
      avatar: object.user.avatar.image.thumb.url
    }
  end

  def comments
    object.comments.map { |comment| CommentSerializer.new(comment, {scope: current_ability}) }
  end

  def attachments
    object.attachments.map { |attachment| AttachmentSerializer.new(attachment)}
  end
end
