class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|
      format.json { render json: @pins }
    end
  end

  def show
    @pin = Pin.find(params[:id])

    respond_to do |format|
      format.json { render json: @pin }
    end
  end

end
