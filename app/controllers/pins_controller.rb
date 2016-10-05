class PinsController < ApplicationController
	def index
		@pins = Pin.all
		respond_to do |format|
			format.json { render json: @pins, include: :user }
		end
	end
end
