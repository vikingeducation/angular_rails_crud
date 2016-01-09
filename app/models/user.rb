class User < ActiveRecord::Base

	has_many :pins

	default_scope { includes(:pins) }

end