Rails.application.routes.draw do
  get 'pin_boards_controller/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "static_pages#root"

    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update]
      resource :session, only: [:create, :destroy]
      resources :boards, only: [:create, :show, :destroy, :update]
      resources :pins, only: [:create, :show, :destroy, :update, :index]
    end
end
