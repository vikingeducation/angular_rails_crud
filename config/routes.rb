Rails.application.routes.draw do
  root "static_pages#index"

  scope :api, constraints: { format: 'json' } do
    scope :v1 do
      resources :pins
    end
  end
end
