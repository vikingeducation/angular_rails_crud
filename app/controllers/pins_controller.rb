class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins, status: 200 }
    end
  end

  def create
    @pin = Pin.create(pin_params)

    respond_to do |format|
      format.json { render json: @pin, status: 200 }
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
  end
end
