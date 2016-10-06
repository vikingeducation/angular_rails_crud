class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json( include: :user) }
    end
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = User.first.id
    @pin.save
  end

  def show
    @pin = Pin.find(params[:id])
    respond_to do |format|
      format.json { render json: @pin.to_json( include: :user) }
    end
  end

  def update
    @pin = Pin.find(params[:id])
    @pin.update(pin_params)
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  private

    def pin_params
      params.require(:pin).permit(:item_name, :description, :buy_sell, :user_id, :id, :created_at, :updated_at)
    end
end
