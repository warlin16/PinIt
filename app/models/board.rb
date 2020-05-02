class Board < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id

  has_many :pins,
    dependent: :destroy
end
