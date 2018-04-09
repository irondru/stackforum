class Comment < ApplicationRecord

  include Meaninglessable

  belongs_to :user
  belongs_to :commentable, polymorphic: true, touch: true

  after_save ThinkingSphinx::RealTime.callback_for(:comment)

  scope :ordered, -> { order(created_at: :asc) }

  validates :body, presence: true, length: { in: 3..300 }

end
