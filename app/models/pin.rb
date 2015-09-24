class Pin < ActiveRecord::Base

  belongs_to :user

  validates :user_id, :item_name, :description,
            presence: true

  validates :buy_sell,
            inclusion: { in: [true, false] }
end
