Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get "/component", to: "pages#component"
  resources :portfolios, only: %i[index show create update]

  get "/addresses/:public_key", to: "addresses#show"
end
