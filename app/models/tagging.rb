# == Schema Information
#
# Table name: taggings
#
#  id      :bigint           not null, primary key
#  tag_id  :integer
#  todo_id :integer
#
class Tagging < ApplicationRecord
  belongs_to :todo
  belongs_to :tag
end
