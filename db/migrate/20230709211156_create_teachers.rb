class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :specialty
      t.string :review

      t.timestamps
    end
  end
end
