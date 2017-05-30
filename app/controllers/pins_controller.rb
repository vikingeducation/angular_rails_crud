class PinsController < ApplicationController

  def index
    @pins = Pin.all.order(created_at: :desc)
    respond_to do |format|
      format.json { render json: @pins.to_json(include: :user) }
    end
  end

end
