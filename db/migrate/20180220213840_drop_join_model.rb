class DropJoinModel < ActiveRecord::Migration[5.1]
  def change
    drop_table :pin_boards
  end
end
