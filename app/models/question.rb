class Question < ApplicationRecord
  include Votable
  include Attachable

  has_many :answers
  belongs_to :user

  validates :title, :body, presence: true

end