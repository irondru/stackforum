class Ability
  include CanCan::Ability

  attr_reader :user

  def initialize(user)
    @user = user
    if user
      user.admin? ? admin_abilities : user_abilities
    else
      guest_abilities
    end
  end

  private

  def guest_abilities
    can [:read, :load_part], :all
  end

  def user_abilities
    guest_abilities
    can [:create, :add_comment], [Question, Answer, Comment]
    can [:update, :destroy, :up_vote, :down_vote, :access],
        [Question, Answer, Comment, Vote], user: user
  end

  def admin_abilities
    can :manage, :all
  end
end
