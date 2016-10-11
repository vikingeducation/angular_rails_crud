class PinsController < ApplicationController
  
  def index
    @pins = Pin.order(created_at: "desc")


    respond_to do |format|
      format.json { render json: @pins }
    end
  end


  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = User.first.id

    if @pin.buy_sell == 'buy'
      @pin.buy_sell = true
    else
      @pin.buy_sell = false
    end

    @pin.save

    respond_to do |format|
      format.json { render json: @pin }
    end

  end





  private

  def pin_params
    params.require(:pin).permit(:item_name, :description, :buy_sell)
  end
end
