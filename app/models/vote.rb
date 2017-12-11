class Vote < ApplicationRecord

  belongs_to :user, optional: true
  belongs_to :votable, polymorphic: true, optional: true

end