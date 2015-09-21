Rails.application.routes.draw do

  root 'pinboards#index'

  scope :api do
    scope :v1 do
      resources :users, only: [:create]
      resources :pins, only: [:index, :create, :show, :update, :destroy]
    end
  end

end
