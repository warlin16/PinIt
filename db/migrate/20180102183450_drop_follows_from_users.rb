class DropFollowsFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :follows
  end
end
