class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, required: true
      t.string :password_digest, required: true
    end
    add_index :users, :username
  end
end
