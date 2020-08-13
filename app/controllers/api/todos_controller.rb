class Api::TodosController < ApplicationController
  before_action :deny_access_if_not_logged_in, only: [:create, :update, :destroy]
  before_action :redirect_if_not_logged_in

  def index
    @todos = Todo.where(user_id: current_user.id)
    render :index
  end

  def show
    @todo = set_todo
    if @todo
      render :show
    else
      render 'shared/errors/todo_errors'
    end
  end

  def create
    @todo = current_user.todos.new(title: todo_params[:title], body: todo_params[:body], isDone: todo_params[:isDone])
    unless todo_params[:tags].nil?
      tag_names = todo_params[:tags].map do |tag|
        tag.name
      end
      @todo.tag_names = tag_names
    end
    if @todo.save
      render :show, status: :ok
    else
      render 'shared/errors/todo_errors'
    end
  end

  def update
    @todo = set_todo
    tag_params = todo_params[:tags]
    
    unless todo_params[:tags].nil?
      tag_names = todo_params[:tags].map do |tag|
        tag.name
      end
    end
    @todo.tag_names = tag_names
    if @todo.update(title: todo_params[:title], body: todo_params[:body], isDone: todo_params[:isDone])
      render :show, status: :ok
    else
      render 'shared/errors/todo_errors'
    end
  end

  def destroy
    @todo = set_todo
    if @todo.destroy
      render :show, status: :ok
    else
      render 'shared/errors/todo_errors'
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:id, :title, :body, :isDone, {tags: [:name]})
  end

  def set_todo
    current_user.todos.find(params[:id])
  end
end
