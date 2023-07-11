class ChangeTimeColumnInLesson < ActiveRecord::Migration[7.0]
  def change
    rename_column :lessons, :time, :start_time
  end
end
