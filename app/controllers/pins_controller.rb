class PinsController < ApplicationController
  def index
    @pins = Pin.all.order(:created_at => :desc)

    respond_to do |format|
      format.json { render :json => @pins }
    end
  end

  def show
    if Pin.exists?(params[:id])
      @pin = Pin.find(params[:id])
      respond_to do |format|
        format.json {render :json => @pin.to_json(include: :user), status: 200}
      end
    else
      respond_to do |format|
        format.json {render nothing: true, status: :unprocessable_entity}
      end
    end
  end

  def create
    @pin = Pin.new(whitelisted_params)
    @pin.user_id = User.all.first.id

    if @pin.save
      respond_to do |format|
        format.json {render :json => @pin}
      end
    else
      respond_to do |format|
        format.json {render :nothing => true, :status => :unprocessable_entity}
      end
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update_attributes(whitelisted_params)
      respond_to do |format|
        format.json {render :json => @pin}
      end
    else
      respond_to do |format|
        format.json {render :nothing => true, :status => :unprocessable_entity}
      end
    end
  end

  def destroy
    if Pin.exists?(params[:id])

      @pin = Pin.find(params[:id])
      @pin.destroy

      respond_to do |format|
        format.json {render :nothing => true, :status => 204}
      end
    else
      respond_to do |format|
        format.json {render :nothing => true, :status => 404}
      end
    end
  end

  private

  def whitelisted_params
    params.require(:pin).permit(:description, :item_name, :buy_sell)
  end
end
