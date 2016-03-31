class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json {render json: @pins.to_json }
    end
  end

  def create
    @pin = Pin.new( pin_params )

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin }
      else
        format.html { render nothing: true }
        format.json { render json: @pin.errors, status: :unprocessable_entity }
      end
    end

  end

  def show
    @pin = Pin.find( params[:id] )

    respond_to do |format|
      format.json { render json: @pin.to_json }
    end
  end

  def edit
    @pin = Pin.find( params[:id] )

    respond_to do |format|
      format.json { render json: @pin.to_json }
    end
  end

  def update
    @pin = Pin.find( params[:id] )

    respond_to do |format|
      if @pin.update( pin_params )
        format.json { render json: @pin.to_json }
      else
        format.json { render json: @pin.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @pin = Pin.find( params[:id] )
    @pin.destroy()
    respond_to do |format|
      format.json { render json: @pin.to_json }
    end

  end

  private


  def pin_params
    params.require(:pin).permit(:item_name, :description, :user_id, :buy_sell)
  end


end
