class AddPresenceRequirements < ActiveRecord::Migration[5.2]
  def change
    change_column :tags, :name, :string, required: true
    change_column :taggings, :tag_id, :integer, required: true
    change_column :taggings, :todo_id, :integer, required: true
  end
end
