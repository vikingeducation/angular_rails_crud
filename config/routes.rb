Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pinboard#index'

  resource :pinboard, only: [:index]

  scope :api do
    scope :v1 do
      resources :pins
    end
  end
end
