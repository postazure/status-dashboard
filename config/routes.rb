Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :events  
  end
  
	get '/', to: 'pages#index'	
	get '*current_route', to: 'pages#index'
end
