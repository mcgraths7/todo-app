Rails.application.routes.draw do
  defaults format: :json do
    namespace :api do
      resources :todos, only: [:index, :create, :show, :update, :destroy]
      resources :steps, only: [:index, :create, :show, :update, :destroy]
    end
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'

  root to: 'static_pages#root'
end
