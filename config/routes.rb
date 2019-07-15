Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'messages#index'
  resources :messages, only: [:index]
  resources :users, onlu:[:edit, :update, :create]
  
end



# Rails.application.routes.draw do
#   devise_for :users
#   root "tweets#index"
#   resources :tweets, only: [:index, :show, :new, :create, :destroy, :edit, :update] do
#   resources :comments, only: [:create]
#   end
#   resources :users, only: [:show]
# end
