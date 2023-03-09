Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get 'chart', to: 'pages#chart'
  resources :portfolios, only: %i[index show create update] do
    resources :transactions, only: :index
  end

  resources :transactions, only: :show
  resources :addresses, only: :show
end
