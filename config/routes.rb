Rails.application.routes.draw do

  resources :teachers, only: [:index, :show]
  # resources :lessons 

end
