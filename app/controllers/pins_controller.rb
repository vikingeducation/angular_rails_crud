class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins.to_json( include: :user ) }
    end

  end

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      respond_to do |format|
        format.json { render json: @pin }
      end
    end
  end


    private
      def pin_params
        params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
      end
end
