Rails.application.routes.draw do
  defaults format: :json do

  # resource :session
  # resources :passwords, param: :token
    namespace :api do
      resources :weather, only: [:index ]
      # resource :session
      post 'login', to: 'sessions#create', as: :login
      delete 'logout', to: 'sessions#destroy', as: :logout
      # get 'testing', to: 'sessions#test', as: :testing

      get 'session', to: 'sessions#check_session', as: :session 
      resources :passwords, param: :token
      resources :users, only: [:create, :index, :show]
      resources :locations, only: [:show, :create, :index ]
      get 'find_location', to: 'locations#find_location', as: :find_location
      resources :user_locations, only:[:update, :create, :destroy]

      # resources :locations, only:[:create, :index]
      match '*path', to: 'base#not_found', via: :all

    end
    match '*path', to: redirect('/api/%{path}'), via: :all, constraints: lambda { |req| !req.path.starts_with?('/api')}
    root to: "main#index"
  end
end
