class Vote < ApplicationRecord

  belongs_to :user, optional: true
  belongs_to :votable, polymorphic: true, optional: true

  scope :find_vote, ->(post) {where(votable: post)}

  def change(post, change_to)
    self.votable = post
    if change_to != changed_to
      if changed_to.nil?
        self.changed_to = change_to
        post.score += change_to
      else
        post.score += change_to * 2
        self.changed_to *= -1
      end
      save
      result = true
    else
      post.score -= change_to
      destroy
      result = false
    end
    post.save
    result
  end

end