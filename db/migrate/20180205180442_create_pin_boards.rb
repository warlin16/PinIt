class CreatePinBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :pin_boards do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.timestamps
    end
  end
end
