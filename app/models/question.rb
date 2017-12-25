class Question < ApplicationRecord
  include Votable
  include Attachable
  include Commentable

  has_many :answers, dependent: :destroy
  belongs_to :user

  validates :title, :body, presence: true

  scope :load_part, ->(offset, count) {order(created_at: :desc).offset(offset).limit(count)}

end