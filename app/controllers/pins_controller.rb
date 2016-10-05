class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins, status: 200 }
    end
  end

  def show
    @pin = Pin.find_by_id(params[:id])

    respond_to do |format|
      format.json {render json: @pin, status: 200}
    end
  end

  def create
    @pin = Pin.create(pin_params)

    respond_to do |format|
      format.json { render json: @pin, status: 200 }
    end
  end

  def update
    @pin = Pin.find_by_id(params[:id])
    @pin.update(pin_params)

    respond_to do |format|
      format.json {render json: @pin, status: 200}
    end
  end

  def edit
    @pin = Pin.find_by_id(params[:id])
    @pin.update(pin_params)

    respond_to do |format|
      format.json {render json: @pin, status: 200}
    end
  end

  def destroy
    @pin = Pin.find_by_id(params[:id])
    if @pin
      result = @pin.destroy
      respond_to do |format|
        format.json { render json: result, status: 200 }
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
  end
end
