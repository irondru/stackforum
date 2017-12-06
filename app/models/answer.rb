class Answer < ApplicationRecord

  has_many :attachments, as: :attachmentable
  belongs_to :question
  belongs_to :user

  validates :body, presence: true

  accepts_nested_attributes_for :attachments

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