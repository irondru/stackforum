class Question < ApplicationRecord
  include Votable
  include Attachable
  include Commentable

  has_many :answers, dependent: :destroy
  belongs_to :user

  validates :title, :body, presence: true

  scope :last_part, ->(count) { order(created_at: :desc).limit(count) }
  scope :previews, ->(offset, count) { select(:id, :title).order(created_at: :desc).offset(offset).limit(count) }

end