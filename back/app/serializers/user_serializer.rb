class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :reg_date, :name, :abilities, :avatar_large,
    :avatar_thumb, :answers_count, :questions_count

  delegate :request, to: :scope

  def avatar_thumb
     object.avatar.present? ? scope.request.base_url + object.avatar.image.thumb.url : scope.request.base_url + '/images/def_avatar.jpg'
  end

  def reg_date
    object.created_at.strftime("%d.%m.%y")
  end

  def avatar_large
    object.avatar.present? ? scope.request.base_url + object.avatar.image.large.url : scope.request.base_url + '/images/def_avatar.jpg'
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
