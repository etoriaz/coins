Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
<<<<<<< HEAD
  get 'chart', to: 'pages#chart'
=======
  get "component", to: "pages#component"
>>>>>>> 4304ac31301b3d0525e2773268a222e35c2fef09
  resources :portfolios, only: %i[index show create update] do
    resources :transactions, only: :index
  end

  resources :transactions, only: :show
  resources :addresses, only: :show
end
