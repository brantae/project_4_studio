Rails.application.routes.draw do

  resources :teachers, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  resources :lessons, only: [:index]
  
  post 'sign_up', to: 'users#create'

end
