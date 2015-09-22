Rails.application.routes.draw do

  devise_for :users
  root 'pinboards#index'

  scope :api do
    scope :v1 do
      resources :users, only: [:create]
<<<<<<< HEAD
      resources :pins, only: [:index, :create, :show, :update, :destroy]
=======
      resources :pins
>>>>>>> 9486c75f88c87780478430ea3ac5facb1b2942e7
    end
  end

end
