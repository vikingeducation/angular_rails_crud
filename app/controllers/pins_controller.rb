class PinsController < ApplicationController
  before_action :set_pin, :except => [:index, :create]

  def index
    @pins = Pin.order(:created_at => :desc)
    respond_to do |format|
      format.json { render :json => resource_to_json, :status => 200 }
    end
  end


  def show
    respond_to do |format|
      format.json { render :json => resource_to_json, :status => 200 }
    end
  end


  def create
    @pin = User.first.pins.build(pin_params)
    respond_to do |format|
      if @pin.save
        flash.now[:error] = 'Pin created'
        format.json { render :json => resource_to_json, :status => 201 }
      else
        flash.now[:error] = 'Pin not created'
        format.json { render :json => pin_errors, :status => 422 }
      end
    end
  end


  def update
    respond_to do |format|
      if @pin.update(pin_params)
        flash.now[:error] = 'Pin updated'
        format.json { render :json => resource_to_json, :status => 200 }
      else
        flash.now[:error] = 'Pin not updated'
        format.json { render :json => pin_errors, :status => 422 }
      end
    end
  end


  def destroy
    respond_to do |format|
      if @pin.destroy
        flash.now[:error] = 'Pin destroyed'
        format.json { render :json => @pin, :status => 200 }
      else
        flash.now[:error] = 'Pin not destroyed'
        format.json { render :json => pin_errors, :status => 422 }
      end
    end
  end


  private
  def set_pin
    @pin = Pin.find_by_id(params[:id])
    unless @pin
      flash.now[:error] = 'Could not find pin'
      respond_to do |format|
        format.json { render :json => pin_errors, :status => 422 }
      end
    end
  end


  def pin_params
    params.require(:pin).permit(
      :item_name,
      :description,
      :pin_type_id
    )
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
    resource.to_json(:include => [:pin_type, :user])
  end
end


