class StaticPagesController < ApplicationController
  before_action :redirect_if_not_logged_in

  def root
    @user = current_user
    render :root
  end
end