class PinsController < ApplicationController

  def index
    @pins = Pin.all
    respond_to do |format|
      format.json {render json: @pins, include: :user}
    end
  end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      respond_to do |format|
        format.json {render json: @pin, include: :user}
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:user_id, :description, :item_name, :buy_sell)
  end

end
