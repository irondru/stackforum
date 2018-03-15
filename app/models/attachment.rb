class Attachment < ApplicationRecord

  belongs_to :attachmentable, polymorphic: true, optional: true

  mount_base64_uploader :file, FileUploader
end
