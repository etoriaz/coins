Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get 'chart', to: 'pages#chart'
  get "component", to: "pages#component"
  resources :portfolios, only: %i[index show create update] do
    resources :transactions, only: :index
  end
  get "/component", to: "pages#component"

  get "/addresses/:public_key", to: "addresses#show"
  resources :transactions, only: :show
  resources :addresses, only: %i[show create]
end
