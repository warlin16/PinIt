class Board < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id

  has_many :pin_boards,
    class_name: 'PinBoard',
    foreign_key: :board_id

  has_many :pins,
    through: :pin_boards
end
