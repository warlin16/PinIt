class CreateAttachments < ActiveRecord::Migration[5.1]
  def change
    create_table :attachments do |t|
      t.attachment :image
      t.timestamps
    end

    add_reference :pins, :attachment, index: true
  end
end
