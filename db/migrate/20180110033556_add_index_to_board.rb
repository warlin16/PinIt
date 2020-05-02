class AddIndexToBoard < ActiveRecord::Migration[5.1]
  def change
    add_index :pins, :board_id
  end
end
