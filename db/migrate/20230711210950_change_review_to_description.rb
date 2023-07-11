class ChangeReviewToDescription < ActiveRecord::Migration[7.0]
  def change
    rename_column :teachers, :review, :description 
  end
end
