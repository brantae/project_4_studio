Rails.application.routes.draw do

  resources :teachers
  resources :lessons
  
  post '/sign_up', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  
end
