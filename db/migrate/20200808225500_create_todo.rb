class CreateTodo < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, required: true
      t.string :body, require: true
      t.boolean :isDone, required: true, default: false
    end
  end
end
