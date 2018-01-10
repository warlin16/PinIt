class Pin < ApplicationRecord
  validates :title, :description, presence: true

  has_attached_file :image, default_url: "9s.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :board,
    class_name: 'Board',
    foreign_key: :board_id,
    optional: true

end
