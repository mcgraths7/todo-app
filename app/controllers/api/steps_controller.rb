class Api::StepsController < ApplicationController
  # before_action :deny_access_if_not_logged_in
  
  def index
    @steps = Step.all
    if @steps
      render :index, status: :ok
    else
      render 'shared/errors/step_errors'
    end
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render :show, status: :created
    else
      render 'shared/errors/step_errors'
    end
  end

  def show
    @step = set_step
    if @step
      render :show
    else
      render 'shared/errors/step_errors'
    end
  end

  def update
    @step = set_step
    if @step.update(step_params)
      render :show
    else
      render 'shared/errors/step_errors'
    end
  end

  def destroy
    @step = set_step
    if @step.destroy
      render :show, status: :ok
    else
      render 'shared/errors/step_errors'
    end
  end

  private
  def step_params
    params.require(:step).permit(:todo_id, :title)
  end

  def set_step
    Step.find(params[:id])
  end
end
