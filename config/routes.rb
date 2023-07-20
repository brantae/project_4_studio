Rails.application.routes.draw do

  resources :teachers, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :new]
  resources :lessons, only: [:index]
  # resources :lessons 

end
