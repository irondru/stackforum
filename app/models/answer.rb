class Answer < ApplicationRecord

  belongs_to :question
  belongs_to :user

  validates :body, presence: true

  scope :ordered, -> {order('best desc, created_at')}

  def set_best
    question.answers.select {|answer| answer.best == true}.each do |answer|
      answer.best = false
      answer.save
    end
    self.best = true
    save
  end

end