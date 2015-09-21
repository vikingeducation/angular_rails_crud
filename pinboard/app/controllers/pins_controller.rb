class PinsController < ApplicationController

  def index
    @pins = Pin.all #.include(:users)
    respond_to do |format|
      format.json { render json: @pins.to_json(include: :users) }

    end

  end

end
