class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @todo = set_todo
    if @todo
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :not_found
    end
  end

  def update
    @todo = set_todo
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = set_todo
    if @todo.destroy
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :isDone)
  end

  def set_todo
    Todo.find(params[:id])
  end
end
