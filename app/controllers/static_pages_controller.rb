class StaticPagesController < ApplicationController
  def root
    @user = current_user
    render :root
  end
end