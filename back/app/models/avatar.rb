class Avatar < ApplicationRecord

  belongs_to :user

  mount_base64_uploader :image, AvatarUploader

  validates :image,
    file_size: { less_than: 2.megabytes },
    file_content_type: { allow: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }

  scope :remove_old, ->(user_id) { where(user_id: user_id).destroy_all }

end
