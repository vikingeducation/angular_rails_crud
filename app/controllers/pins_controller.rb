class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json }
    end
  end


  def create
    @pin = User.first.pins.build(pin_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin.to_json, status: 200}
      else
        format.json { render json: {error: "Couldn't created pin"}, status: 400}
      end
    end
  end

  private
    def pin_params 
      params.require(:pin)
        .permit(:item_name, 
                :buy_sell, 
                :description,
                )
    end
end
