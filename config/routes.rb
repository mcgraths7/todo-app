Rails.application.routes.draw do
  defaults format: :json do
    namespace :api do
      resources :todos, only: [:index, :create, :show, :update, :destroy]
    end
  end
  root to: 'static_pages#root'
end
