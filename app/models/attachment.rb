class Attachment < ApplicationRecord
  has_attached_file :image, default_url: "9s.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
