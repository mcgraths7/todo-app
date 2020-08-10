class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validate :boolean_field_exists

  has_many :steps, dependent: :destroy
  has_many :taggings
  has_many :tags,
           through: :taggings,
           source: :tag
  
  def tag_names=(tag_name_arr)
    self.tags = tag_name_arr.map do |tag_name|
      Tag.find_or_create_by(name: tag_name.titleize)
    end
  end
  private
  # Validates the presence of a required Boolean field, since Boolean "false".blank => true
  def boolean_field_exists
    isDone.present? || [true, false].include?(isDone)
  end
end
