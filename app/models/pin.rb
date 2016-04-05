class Pin < ActiveRecord::Base

  belongs_to :user

  validates :item_name, length: { in: 0..140 }
  validates :description, length: {in: 0...400}

end
