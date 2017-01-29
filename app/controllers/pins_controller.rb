class PinsController < ApplicationController

  def index
    @pins = Pin.order(:created_at => :desc)
    respond_to do |format|
      format.json { render :json => resource_to_json, :status => 200 }
    end
  end

  def pin_params
    params.require(:post).permit(:item_name, :buy_sell, :description, :user_id)
  end


  def pin_errors
    if @pin
      error = @pin.errors.full_messages.to_json
    else
      error = flash.now[:error]
    end
    { :errors => error }
  end

  def resource_to_json
    resource = action_name == 'index' ? @pins : @pin
    resource.to_json(:include => :user)
  end
end
