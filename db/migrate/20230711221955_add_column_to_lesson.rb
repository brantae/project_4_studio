class AddColumnToLesson < ActiveRecord::Migration[7.0]
  def change
    add_column :lessons, :class_length, :integer
  end
end
