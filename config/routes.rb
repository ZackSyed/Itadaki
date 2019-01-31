Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show] do
      collection do 
        get 'search'
      end 
    end 
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :show, :index]
    resources :groups, only: [:create, :show, :destroy, :index]
  end 
end
