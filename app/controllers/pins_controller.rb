class PinsController < ApplicationController

  def index
    @pins = Pin.order(:created_at => :desc)
    respond_to do |format|
      format.json { render :json => resource_to_json, :status => 200 }
    end
  end

  def create
    @pin = Pin.new(pin_params)
    respond_to do |format|
      if @pin.save
        flash.now[:error] = 'pin created'
        format.json { render :json => resource_to_json, :status => 201 }
      else
        flash.now[:error] = 'pin not created'
        format.json { render :json => pin_errors, :status => 422 }
      end
    end
  end

  def show
    respond_to do |format|
      format.json { render :json => resource_to_json, :status => 200 }
    end
  end

  def update
    respond_to do |format|
      if @pin.update(pin_params)
        flash.now[:error] = 'Pin updated'
        format.json { render :json => resource_to_json, :status => 200 }
      else
        flash.now[:error] = 'Pin not updated'
        format.json { render :json => post_errors, :status => 422 }
      end
    end
  end


  private
  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id)
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
