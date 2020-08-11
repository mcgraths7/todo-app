# == Schema Information
#
# Table name: todos
#
#  id      :bigint           not null, primary key
#  title   :string
#  body    :string
#  isDone  :boolean          default(FALSE)
#  user_id :integer
#
require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
