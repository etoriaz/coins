Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get "component", to: "pages#component"
  resources :portfolios, only: %i[index show create update] do
    resources :transactions, only: :index
  end

  resources :transactions, only: :show
  resources :addresses, only: %i[show create]
end
