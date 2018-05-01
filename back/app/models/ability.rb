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
    can :read, :all
  end

  def user_abilities
    guest_abilities
    can [:create, :new_comment, :change_vote], [Question, Answer, Comment, Vote]
    can [:update, :destroy, :access],
        [Question, Answer, Comment, Attachment], user: user
  end

  def admin_abilities
    can :manage, :all
  end
end
