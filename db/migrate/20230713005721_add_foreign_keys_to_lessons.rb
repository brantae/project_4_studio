class AddForeignKeysToLessons < ActiveRecord::Migration[7.0]
  def change
    add_column :lessons, :user_id, :integer
    add_column :lessons, :teacher_id, :integer
  end
end
