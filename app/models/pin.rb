class Pin < ActiveRecord::Base

  validates :user_id, :item_name, :buy_sell, :description,
            presence: true
end
