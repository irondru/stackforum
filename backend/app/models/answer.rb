class Answer < ApplicationRecord

  include Votable
  include Attachable
  include Commentable
  include Meaninglessable

  belongs_to :question, touch: true
  belongs_to :user

  validates :body, presence: true, length: { in: 3..1000 }

  scope :ordered, -> { order('best desc, created_at') }

  def set_best
    question.answers.select {|answer| answer.best == true}.each do |answer|
      answer.best = false
      answer.save
    end
    self.best = true
    save
  end

end