class PinsController < ApplicationController


  def index
    @pins = Pin.all
    respond_to do |format|
      format.json {render json: @pins, include: :user}
    end
  end

  def show
    @pin = Pin.find(params[:id]);
    respond_to do |format|
      format.json {render json: @pin, include: :user}
    end
  end

  def create
    @user = User.find(current_user.id)
    @pin = @user.pins.build(pin_params)
    if @pin.save
      respond_to do |format|
        format.json {render json: @pin, include: :user}
      end
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if current_user.id == @pin.user.id
      if @pin.update(pin_params)
        respond_to do |format|
          format.json {render json: @pin, include: :user}
        end
      end
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if current_user.id == @pin.user.id
      @pin.destroy
      respond_to do |format|
        format.json {render nothing: true, status: 200}
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:user_id, :description, :item_name, :buy_sell)
  end

end
