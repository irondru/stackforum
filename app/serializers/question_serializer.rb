class QuestionSerializer < ActiveModel::Serializer
  attributes :question

  has_many :answers, each_serialiser: AnswerSerializer
  has_many :comments

  def question
    {
      id: object.id,
      title: object.title,
      body: object.body,
      created_at: object.created_at
    }
  end

  def answers
    object.answers.ordered
  end

end
