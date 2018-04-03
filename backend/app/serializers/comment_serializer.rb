class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :access, :author, :posted_at

  def author
    {
      id: object.user.id,
      name: object.user.name
    }
  end

  def posted_at
    object.created_at.strftime("%d.%m.%y %H:%M:%S")
  end

  def access
    scope.can?(:access, object)
  end

end
