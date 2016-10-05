class PinsController < ApplicationController
  def index
    @pins = Pin.all.to_json( include: :user)

    respond_to do |format|
      format.json { render json: @pins, status: 200 }
    end
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user = User.all.sample

    if @pin.save
      respond_to do |format|
        format.json { render json: @pin.to_json( include: :user ), status: 201 }
      end
    end
    
  end

  private

  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description)
  end
end
