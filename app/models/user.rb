class User < ActiveRecord::Base

  has_many :pins

  validates :username,
            presence: true
end
