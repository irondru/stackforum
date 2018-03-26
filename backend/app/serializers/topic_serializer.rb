class TopicSerializer < ActiveModel::Serializer
  attributes :topics

  def topics
    object.map { |obj| QuestionsListItemSerializer.new(obj) }
  end

end
