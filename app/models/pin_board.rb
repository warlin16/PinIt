class PinBoard < ApplicationRecord
  belongs_to :board,
    class_name: 'Board',
    foreign_key: :board_id
    
  belongs_to :pin,
    class_name: 'Pin',
    foreign_key: :pin_id
end
