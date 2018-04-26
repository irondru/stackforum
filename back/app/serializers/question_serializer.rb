class QuestionSerializer < ActiveModel::Serializer
  attributes :question

  has_many :answers, each_serialiser: AnswerSerializer

  delegate :request, to: :scope

  def question
    {
      id: object.id,
      title: object.title,
      body: object.body,
      created_at: object.created_at,
      score: object.score,
      access: access,
      posted_at: object.created_at.strftime("%d.%m.%y %H:%M:%S"),
      comments: object.comments.ordered.map {
        |comment| CommentSerializer.new(comment, {scope: current_ability})
      },
      attachments: object.attachments.map { |attachment| AttachmentSerializer.new(attachment)},
      author: {
        id: object.user.id,
        name: object.user.name,
        avatar: object.user.avatar.present? ? scope.request.base_url + object.user.avatar.image.thumb.url : scope.request.base_url + '/images/def_avatar.jpg'
      }
    }
  end

  def access
    scope.can?(:access, object)
  end

  def answers
    object.answers.ordered
  end

end
