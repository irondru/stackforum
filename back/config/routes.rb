Rails.application.routes.draw do

  concern :votable do
    member do
      post :change_vote
    end
  end

  concern :commentable do
    post :new_comment, on: :member
    resources :comments, only: [:update, :destroy]
  end

  namespace :api do
    namespace :v1 do
      get 'profile', to: 'profile#show'
      get 'questions/pages/:page', to: 'questions#index'
      post 'avatar_upload', to: 'profile#avatar_uploader'
      delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'
      resource :search, only: :show

      resources :questions, concerns: [:votable, :commentable], except: [:new, :edit], shallow: true do
        resources :answers, concerns: [:votable, :commentable], only: [:create, :update, :destroy] do
          post :best, on: :member
        end
      end

      devise_for :users, singular: :user, controllers: { #singular: :user - починка current_user под нэймспейсом
        sessions: 'api/v1/sessions',
        registrations: 'api/v1/registrations'
      }
    end
  end


  mount ActionCable.server => '/cable'
  
  match "*path", to: proc { |env| [200,
    {
    'Access-Control-Allow-Credentials' => 'true',
    'Access-Control-Allow-Methods' => 'GET, PATCH, PUT, DELETE, POST, OPTIONS',
    'Access-Control-Allow-Origin' => '*',
    'Access-Control-Expose-Headers' => '',
    'Access-Control-Max-Age' => '1728000',
    'Content-Type' => 'application/json',
    'Access-Control-Allow-Headers' => 'Content-Type, Accept',
  }, ["CORS Preflight"]] }, via: [:options]

end
