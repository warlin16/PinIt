class AddIndexToPinBoards < ActiveRecord::Migration[5.1]
  def change
    add_index :pin_boards, :board_id
    add_index :pin_boards, :pin_id
  end
end
