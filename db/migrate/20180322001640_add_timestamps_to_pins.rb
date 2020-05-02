class AddTimestampsToPins < ActiveRecord::Migration[5.1]
  def change
    add_timestamps :pins, null: true
  end
end
