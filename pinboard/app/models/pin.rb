class Pin < ActiveRecord::Base

  belongs_to :user

  #SQL will include user object in search
  default_scope { includes(:user)}
end
