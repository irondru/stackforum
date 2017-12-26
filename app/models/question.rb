class Question < ApplicationRecord
  include Votable
  include Attachable
  include Commentable

  has_many :answers, dependent: :destroy
  belongs_to :user

  validates :title, :body, presence: true

  PAGE_SIZE = 10

  scope :last_part, -> { order(created_at: :desc).limit(PAGE_SIZE) }
  scope :previews, ->(page) { select(:id, :title).order(created_at: :desc)
                                  .offset(page.to_i * PAGE_SIZE).limit(PAGE_SIZE) }

end