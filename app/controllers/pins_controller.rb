class PinsController < ApplicationController

  def index

    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins }
    end
  end

  def show

  end

  def create
    @pin = Pin.new(pin_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def update

  end

  def destroy

  end

  private

    def pin_params
      params.require(:pin).permit(:item_name, 
                                :buy_sell, 
                                :description,
                                :user_id)
    end


end
