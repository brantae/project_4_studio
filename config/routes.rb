Rails.application.routes.draw do

  resources :users
  resources :teachers
  resources :lessons
  
  post '/sign_up', to: 'users#create'
  get '/me', to: 'users#show'

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/auth", to: "users#show"
end
