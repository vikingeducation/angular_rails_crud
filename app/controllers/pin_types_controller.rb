class PinTypesController < ApplicationController
  def index
    @pin_types = PinType.all
    respond_to do |format|
      format.json { render :json => @pin_types.to_json, :status => 200 }
    end
  end
end
