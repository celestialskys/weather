Rails.application.routes.draw do
  namespace :api do 
    resources :users, only: [:create, :index, :show] do 
      resources :locations, only: [:show ]
      resources :user_locations, only:[:update, :create, :destroy]
    end
    resources :locations, only:[:create, :index]
  end
end
