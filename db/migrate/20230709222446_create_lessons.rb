class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.integer :room_num
      t.datetime :time
      t.string :repeat

      t.timestamps
    end
  end
end
