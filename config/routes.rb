Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do 
    scope :v1 do 
      resources :static_pages, only: [:index]
      resources :users, only: [:index]
      resources :pins, only: [:index, :create, :show, :update, :destroy]
    end
  end

  root to: "static_pages#index"
end
