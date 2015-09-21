class PinsController < ApplicationController

  def index
    # @pins = Pin.includes(:user).all #without default_scope
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json(:include => :user) }
    end
  end

end
