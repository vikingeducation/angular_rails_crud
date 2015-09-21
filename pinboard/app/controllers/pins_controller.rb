class PinsController < ApplicationController

  def index
    # @pins = Pin.includes(:user).all #without default_scope
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json(:include => :user) }
    end
  end

  def create
    @pin = Pin.new(whitelisted_params)

    respond_to do |format|
      if @pin.save
        format.json { render json: @pin }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  def show
    @pin = Pin.find(params['id'])

    respond_to do |format|
      if @pin
        format.json { render json: @pin.to_json(:include => :user) }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  def edit
    @pin = Pin.find(params['id'])
    respond_to do |format|
      if @pin
        format.json { render json: @pin.to_json(:include => :user) }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def update
    @pin = Pin.find(params['id'])

    respond_to do |format|
      if @pin.update(whitelisted_params)
        format.json { render json: @pin.to_json(include: :user) }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  def destroy
    @pin = Pin.find(params['id'])

    respond_to do |format|
      if @pin.destroy
        format.json { render status: :accepted}
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  private

  def whitelisted_params
    params.require(:pin).permit(:item_name, :buy_string,
                                :description, :user_id)
  end

end
