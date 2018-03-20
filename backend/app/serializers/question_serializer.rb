class QuestionSerializer < ActiveModel::Serializer
  attributes :question

  has_many :answers, each_serialiser: AnswerSerializer

  def question
    {
      id: object.id,
      title: object.title,
      body: object.body,
      created_at: object.created_at,
      score: object.score,
      access: access,
      comments: object.comments.map { |comment| CommentSerializer.new(comment) },
      attachments: object.attachments.map { |attachment| AttachmentSerializer.new(attachment)}
    }
  end

  def access
    scope.can?(:access, object)
  end

  def answers
    object.answers.ordered
  end

end
