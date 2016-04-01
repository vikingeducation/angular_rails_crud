class Pin < ActiveRecord::Base
  belongs_to :user

  validates :item_name, length: { in: 1..32 }
  validates :description, length: { in: 1..140 }
end
