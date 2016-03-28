class Pin < ActiveRecord::Base
  belongs_to :pin_type
  belongs_to :user
end
