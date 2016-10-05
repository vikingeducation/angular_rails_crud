class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json( include: :user) }
    end
  end

  def create
    p params
    @pin = Pin.new(pin_params)
    # @pin.user_id = User.first.id
    # @pin.buy_sell = true
    @pin.save
  end

  private

    def pin_params
      params.require(:pin).permit(:item_name, :description, :buy_sell, :user_id)
    end
end
