class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validate :boolean_field_exists

  has_many :steps, dependent: :destroy

  private
  # Validates the presence of a required Boolean field, since Boolean "false".blank => true
  def boolean_field_exists
    isDone.present? || [true, false].include?(isDone)
  end
end
