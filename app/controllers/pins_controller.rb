class PinsController < ApplicationController
  def index
    @pins = Pin.all.to_json( include: :user)

    respond_to do |format|
      format.json { render json: @pins, status: 200 }
    end
  end
end
