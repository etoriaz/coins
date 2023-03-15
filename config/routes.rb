Rails.application.routes.draw do
  get 'errors/not_found'
  get 'errors/internal_server_error'
  devise_for :users
  root to: "pages#home"
  get 'chart', to: 'pages#chart'
  get "component", to: "pages#component"
  resources :portfolios, only: %i[index show create update] do
    resources :transactions, only: :index
  end
  get "/component", to: "pages#component"

  get "/addresses/:id", to: "addresses#show"
  resources :transactions, only: :show
  resources :addresses, only: %i[show create]
end
