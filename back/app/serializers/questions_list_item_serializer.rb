class QuestionsListItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :answers_count, :preview, :score, :views

  def answers_count
    object.answers.count
  end

  def preview
    object.body.truncate(220, separator: ' ')
  end

end
