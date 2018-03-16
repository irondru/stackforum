class Question < ApplicationRecord

  include Votable
  include Attachable
  include Commentable
  include Meaninglessable

  has_many :answers, dependent: :destroy
  belongs_to :user

  validates :title, presence: true, length: { in: 3..80 }
  validates :body, presence: true, length: { in: 3..1000 }

  PAGE_SIZE = 10

  scope :last_part, -> { order(created_at: :desc).limit(PAGE_SIZE) }
  scope :previews, ->(page) { select(:id, :title).order(created_at: :desc)
                                  .offset(page.to_i * PAGE_SIZE).limit(PAGE_SIZE) }

end