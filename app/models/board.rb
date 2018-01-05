class Board < ApplicationRecord
  validates :title, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id
end
