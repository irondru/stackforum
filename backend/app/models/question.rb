class Question < ApplicationRecord

  include Votable
  include Attachable
  include Commentable
  include Meaninglessable

  #attr_accessor :views

  has_many :answers, dependent: :destroy
  belongs_to :user

  validates :title, presence: true, length: { in: 3..80 }
  validates :body, presence: true, length: { in: 3..1000 }

  PAGE_SIZE = 20

  scope :previews, ->(page) { order(created_at: :desc)
                                  .offset(page.to_i * PAGE_SIZE).limit(PAGE_SIZE) }

  def views_up
    self.views += 1
    self.save
  end

end
