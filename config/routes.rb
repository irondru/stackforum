Rails.application.routes.draw do

  use_doorkeeper
  devise_for :users, controllers: {
    sessions: 'auth/sessions',
    registrations: 'auth/registrations',
    omniauth_callbacks: 'omniauth_callbacks'
  }

  concern :votable do
    member do
      get :up_vote
      get :down_vote
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
      resource :profiles do
        get :me, on: :collection
      end

      resources :questions, concerns: [:votable, :commentable], shallow: true do
        resources :answers, concerns: [:votable, :commentable], only: [:create, :update, :destroy] do
          get :best, on: :member
        end
      end

    end
  end

  resource :search, only: :show

  get '/questions_pages/:page', to: 'questions#index'

  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'

  mount ActionCable.server => '/cable'

end
