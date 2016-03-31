class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json {render json: @pins }
    end
  end

  def create
    @pin = Pin.new( pin_params )

    if @pin.save
      respond_to do |format|
        format.json { render json: @pin }
      end
    else
      respond_to do |format|
        format.json { render status: :unprocessable_entity }
      end
    end

  end


  private


  def pin_params
    params.require(:pin).permit(:item_name, :description, :user_id, :buy_sell)
  end


end
