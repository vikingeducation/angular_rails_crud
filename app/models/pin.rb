class Pin < ActiveRecord::Base
  belongs_to :user

  validates :description, :item_name, presence: true
end
