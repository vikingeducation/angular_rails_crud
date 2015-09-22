class UsersController < ApplicationController

  def create
    @user = Pin.new(whitelisted_params)

    respond_to do |format|
      if @user.save
        format.json { render json: @user }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  private

  def whitelisted_params
    params.require(:user).permit(:email, :username, :id,
                                :password, :password_confirmation)
  end

end
