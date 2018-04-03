class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :reg_date, :name, :abilities, :avatar_large,
    :avatar_thumb, :answers_count, :questions_count

  def avatar_thumb
    object.avatar.image.thumb.url if object.avatar.present?
  end

  def reg_date
    object.created_at.strftime("%d.%m.%y")
  end

  def avatar_large
    object.avatar.image.large.url if object.avatar.present?
  end

  def answers_count
    object.answers.count
  end

  def questions_count
    object.questions.count
  end

  def abilities
    result = scope.can?(:create, Question) ? 1 : 0
    result += scope.can?(:create, Answer) ? 2 : 0
    result += scope.can?(:create, Comment) ? 4 : 0
    result += scope.can?(:change_vote, Vote) ? 8 : 0
    result
  end

end
