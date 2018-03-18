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

  resources :questions, concerns: [:votable, :commentable], shallow: true do
    resources :answers, concerns: [:votable, :commentable], only: [:create, :update, :destroy] do
      get :best, on: :member
    end
  end

  namespace :api do
    namespace :v1 do

      get 'profile', to: 'profile#show'

      resources :questions, concerns: [:votable, :commentable], except: [:new, :edit], shallow: true do
        resources :answers, concerns: [:votable, :commentable], only: [:create, :update, :destroy] do
          get :best, on: :member
        end
      end

      devise_for :users, singular: :user, controllers: {
        sessions: 'api/v1/sessions',
        registrations: 'api/v1/registrations'
      }
    end
  end

  resource :search, only: :show

  get '/questions_pages/:page', to: 'questions#index'

  get '/user', to: 'questions#index'

  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'

  mount ActionCable.server => '/cable'

  match "*path", :to => proc { |env| [200, {
    'Access-Control-Allow-Credentials' => 'true',
    'Access-Control-Allow-Methods' => 'GET, PATCH, PUT, DELETE, POST, OPTIONS',
    'Access-Control-Allow-Origin' => 'http://localhost:3000',
    'Access-Control-Expose-Headers' => '',
    'Access-Control-Max-Age' => '1728000',
    'Content-Type' => 'application/json',
    'Access-Control-Allow-Headers' => 'Content-Type, Accept',
  }, ["CORS Preflight"]] }, :via => [:options]

end