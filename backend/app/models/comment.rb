class Comment < ApplicationRecord

  include Meaninglessable

  belongs_to :user
  belongs_to :commentable, polymorphic: true, touch: true

  validates :body, presence: true, length: { in: 3..300 }

end
