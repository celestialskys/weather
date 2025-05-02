Rails.application.routes.draw do
  defaults format: :json do

  # resource :session
  # resources :passwords, param: :token
    namespace :api do
      resources :weather, only: [:index ]
      # resource :session
      post 'login', to: 'sessions#create', as: :login
      post 'logout', to: 'sessions#destroy', as: :logout
      get 'session', to: 'sessions#check_session', as: :session 
      resources :passwords, param: :token
      resources :users, only: [:create, :index, :show] do 
        resources :locations, only: [:show, :create, :index ]
        resources :user_locations, only:[:update, :create, :destroy]
      end
      # resources :locations, only:[:create, :index]
      match '*path', to: 'base#not_found', via: :all

    end
    match '*path', to: redirect('/api/%{path}'), via: :all, constraints: lambda { |req| !req.path.starts_with?('/api')}
    root to: "main#index"
  end
end
