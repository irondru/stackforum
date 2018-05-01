class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :body, :posted_at, :author, :score, :access, :comments, :attachments, :best

  #has_many :comments, each_serialiser: CommentSerializer #its not working, wtf?

  delegate :request, to: :scope
  delegate :current_ability, to: :scope

  def access
    scope.can?(:access, object)
  end

  def author
    {
      id: object.user.id,
      name: object.user.name,
      avatar: object.user.avatar.present? ? scope.request.base_url + object.user.avatar.image.thumb.url : scope.request.base_url + '/images/def_avatar.jpg'
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
