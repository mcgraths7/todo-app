class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    if @todos
      render json: @todos, status: :ok, include: :tags
    end
  end

  def create
    @todo = Todo.new(title: todo_params[:title], body: todo_params[:body], isDone: todo_params[:isDone])
    unless todo_params[:tag_names].nil?
      @todo.tag_names = todo_params[:tag_names]
    end
    if @todo.save
      render json: @todo, include: :tags, status: :ok
    else
      render json: @todo.errors.full_messages, status: :bad_request
    end
  end

  def show
    @todo = set_todo
    if @todo
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: :not_found
    end
  end

  def update
    @todo = set_todo
    if @todo.update(todo_params)
      render json: @todo, status: :ok, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = set_todo
    if @todo.destroy
      render json: @todo, status: :ok, include: :tags
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:id, :title, :body, :isDone, tag_names: [])
  end

  def set_todo
    Todo.find(params[:id])
  end
end
