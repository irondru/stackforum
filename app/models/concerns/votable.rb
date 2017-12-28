module Votable
  extend ActiveSupport::Concern

  included do
    has_many :votes, as: :votable, dependent: :destroy
  end

  def change_vote(user, change_to) # change_to возможные варианты 1, -1
    vote = votes.where(user: user).first_or_initialize
    if change_to != vote.changed_to # пользователь меняет или это новый голос?
      if vote.changed_to.nil? # если пользователь ранее не голосвал за данный пост
        vote.changed_to = change_to
        self.score += change_to
      else # если голосовал
        self.score += change_to * 2
        vote.changed_to *= -1
      end
      vote.save
    else  # если повторный клик, значит удаляем голос
      self.score -= change_to
      vote.destroy
    end
    save
    score
  end

end