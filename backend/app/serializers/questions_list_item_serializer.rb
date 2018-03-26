class QuestionsListItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :answers_count, :preview

  def answers_count
    object.answers.count
  end

  def preview
    object.body.truncate(50, separator: ' ')
  end

end
