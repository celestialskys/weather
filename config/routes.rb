Rails.application.routes.draw do
  # resource :session
  # resources :passwords, param: :token
  namespace :api do
    resources :weather, only: [:index ]
    resource :session
    resources :passwords, param: :token
    resources :users, only: [:create, :index, :show] do 
      resources :locations, only: [:show ]
      resources :user_locations, only:[:update, :create, :destroy]
    end
    resources :locations, only:[:create, :index]
  end

  root to: "main#index"
end
