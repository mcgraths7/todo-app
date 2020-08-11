class AddUserIdtoTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :user_id, :integer, required: true
  end
end
