class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, except: :destroy

  def new
    render :login
  end

  def create
    @user = User.find_by(username: user_params[:username]).try(:authenticate, user_params[:password] )
    if @user
      login!(@user)
      redirect_to root_url
    else
      @user = User.new
      flash.now[:errors] = { base: ['Invalid username or password'] }
      render :login
    end
  end

  def destroy
    logout!
    redirect_to login_url
  end
end
