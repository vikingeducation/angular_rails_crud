class PinsController < ApplicationController

  def index
    @pins = Pin.all
    respond_to do |format|
      format.html
      format.json { render json: @pins.to_json }
    end
  end

end
