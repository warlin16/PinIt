class Pin < ApplicationRecord
  validates :title, :description, :attachment, presence: true

  belongs_to :attachment
  delegate :image, to: :attachment

  accepts_nested_attributes_for :attachment
  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :board, optional: true
end
