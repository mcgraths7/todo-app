class Api::StepsController < ApplicationController
  before_action :deny_access_if_not_logged_in
  def index
    @steps = Step.where(todo_id: params[:todo_id])
    if @steps
      render json: @steps, status: :ok
    else
      render json: @steps.errors.full_messages, status: :no_content
    end
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step, status: :created
    else
      render json: @step.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    @step = set_step
    if @step.destroy
      render json: @step, status: :ok
    else
      render json: @step, status: :unprocessable_entity
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
