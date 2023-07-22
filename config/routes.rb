Rails.application.routes.draw do

  resources :teachers
  resources :users
  resources :lessons
  
  post 'sign_up', to: 'users#create'

end
