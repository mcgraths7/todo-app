# == Schema Information
#
# Table name: steps
#
#  id      :bigint           not null, primary key
#  title   :string
#  todo_id :integer
#
class Step < ApplicationRecord
  validates :title, :todo_id, presence: true

  belongs_to :todo
end
