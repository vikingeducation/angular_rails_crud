Rails.application.routes.draw do
  root "pins#index"

  scope :api do
    scope :v1 do
      resources :pins, :only => [:index]
    end
  end
end
