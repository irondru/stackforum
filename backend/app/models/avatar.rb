class Avatar < ApplicationRecord

  belongs_to :user

  mount_base64_uploader :image, AvatarUploader

end
