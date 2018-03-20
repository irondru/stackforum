class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :abilities

  def abilities
    result = scope.can?(:create, Question) ? 1 : 0
    result += scope.can?(:create, Answer) ? 2 : 0
    result += scope.can?(:create, Comment) ? 4 : 0
    result += scope.can?(:change_vote, Vote) ? 8 : 0
    result
  end

end
