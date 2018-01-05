class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps
    end
    add_index :boards, :author_id
  end
end
