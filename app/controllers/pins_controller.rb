class PinsController < ApplicationController
  def index
    @pins = Pin.all.order(created_at: :desc)
    respond_to do |format|
      format.json { render json: @pins }
    end
  end

  def create
    @pin = Pin.new(whitelisted_params)
    if @pin.save
      respond_to do |format|
        format.json { render json: @pin }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @pin.errors.full_messages } }
      end
    end
  end

  def show
    @pin = Pin.find(params[:id])
    respond_to do |format|
      format.json { render json: @pin }
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(whitelisted_params)
      respond_to do |format|
        format.json { render json: @pin }
      end
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      respond_to do |format|
        format.json { render json: @pin }
      end
    end
  end

  private

  def whitelisted_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
  end
end
