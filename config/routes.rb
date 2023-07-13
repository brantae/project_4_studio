Rails.application.routes.draw do

  resources :teachers, only: [:index, :show]
  resources :users, only: [:show, :create]
  # resources :lessons 

end
