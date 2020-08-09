class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, required: true
      t.integer :todo_id, require: true
    end
  end
end