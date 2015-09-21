class PinsController < ApplicationController

  def index
    # @pins = Pin.includes(:user).all #without default_scope
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json(:include => :user) }
    end
  end

  def create
    @pin = Pin.new(whitelisted_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  private

  def whitelisted_params
    params.require(:pin).permit(:item_name, :buy_string,
                                :description, :user_id)
  end

end
