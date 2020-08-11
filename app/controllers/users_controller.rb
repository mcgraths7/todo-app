class UsersController < ApplicationController
  def new
    @user = User.new
    render :signup
  end

  def create
    @user = User.new
    @user.username = user_params[:username]
    @user.password = user_params[:password]
    @user.password_confirmation = user_params[:password_confirmation]
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages, status: :unauthorized
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end