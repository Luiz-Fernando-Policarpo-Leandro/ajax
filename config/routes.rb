Rails.application.routes.draw do
  resources :enderecos
  resources :cidades
  resources :estados
  root to: 'estados#index'

end