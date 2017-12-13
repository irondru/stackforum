class Question < ApplicationRecord
  include Votable
  include Attachable

  has_many :answers, dependent: :delete_all
  belongs_to :user

  validates :title, :body, presence: true

end