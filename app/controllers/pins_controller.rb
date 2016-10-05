class PinsController < ApplicationController
	def index
		@pins = Pin.all
		respond_to do |format|
			format.json { render json: @pins, include: :user }
		end
	end

	def create
		@pin = Pin.new(pin_params)
		respond_to do |format|
			if @pin.save
				format.json{ render json: @pin }
			else
				format.json{ render json: {error: @pin.errors.full_messages.join(', ')} }
			end
		end
	end

	private
	def pin_params
		params.require('pin').permit(:item_name, :buy_sell, :description, :user_id)
	end
end
