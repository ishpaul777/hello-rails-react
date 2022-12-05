Rails.application.routes.draw do
  root 'root#index'

  # greetings index api v1 route
  get 'api/v1/greetings', to: 'greetings#index'
end
