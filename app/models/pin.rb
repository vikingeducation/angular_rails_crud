class Pin < ActiveRecord::Base

  belongs_to :user

  validates :user_id, :item_name, :buy_sell, :description,
            presence: true
end
