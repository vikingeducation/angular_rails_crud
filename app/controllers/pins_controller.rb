class PinsController < ApplicationController
  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins.to_json( include: :user ), status: 200 }
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

  def show
    @pin = Pin.find(params[:id])

    respond_to do |format|
      format.json { render json: @pin.to_json( include: :user ), status: 200 }
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      respond_to do |format|
        format.json { render json: @pin.to_json( include: :user ), 
          status: 200 }
      end
    end

  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      respond_to do |format|
        format.json { render json: @pin, 
          status: 200 }
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description)
  end
end
