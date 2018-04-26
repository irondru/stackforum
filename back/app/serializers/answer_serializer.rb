class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :posted_at, :author, :score, :access, :comments, :attachments, :best

  #has_many :comments, each_serialiser: CommentSerializer #its not working, wtf?

  def access
    scope.can?(:access, object)
  end

  def author
    #puts request.base_url
    {
      id: object.user.id,
      name: object.user.name,
      avatar: object.user.avatar.present? ? object.user.avatar.image.thumb.url : 'images/def_avatar.jpg'
    }
  end

  def posted_at
    object.created_at.strftime("%d.%m.%y %H:%M:%S")
  end

  def comments
    object.comments.ordered.map { |comment| CommentSerializer.new(comment, {scope: current_ability}) }
  end

  def attachments
    object.attachments.map { |attachment| AttachmentSerializer.new(attachment)}
  end
end
