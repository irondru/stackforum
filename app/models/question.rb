class Question < ApplicationRecord

  has_many :answers
  has_many :attachments, as: :attachmentable
  has_one :vote, as: :votable
  belongs_to :user

  validates :title, :body, presence: true

  accepts_nested_attributes_for :attachments
end