class RemoveIndexFromBoard < ActiveRecord::Migration[5.1]
  def change
    remove_index :pins, :board_id
  end
end
