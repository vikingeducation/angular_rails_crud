class Pin < ActiveRecord::Base

  belongs_to :user

  validates_inclusion_of :buy_sell, :in => [true, false]
  validates_presence_of :user, :item_name, :description

end
