class AddSessionTokenToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string, required: true
  end
end
