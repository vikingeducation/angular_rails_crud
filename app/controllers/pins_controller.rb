class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins.to_json(:include => :user) }
    end
  end


  def create
    @pin = current_user.pins.build(pin_params)

    if @pin.save
      respond_to do |format|
        format.json { render json: @pin.to_json(:include => :user), :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end


  def show
    # use find_by_id for more graceful error handling
    @pin = Pin.find_by_id(params[:id]) || nil

    if @pin
      respond_to do |format|
        format.json { render json: @pin.to_json(:include => :user), :status => 200 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => true, :status => 404 }
      end
    end
  end


  private

    def pin_params
      params.require(:pin).permit(:item_name, :buy_sell, :description)
    end

end
