class CreatePins < ActiveRecord::Migration[5.1]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :author_id, null: false
      t.string :img_url
      t.integer :board_id

    end
    add_index :pins, :author_id
    add_index :pins, :board_id
  end
end
