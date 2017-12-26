Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' } #sessions: custom_session_controller

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
    # post :pages, on: :collection
  end

  get '/questions_pages/:page', to: 'questions#index'

  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'

  mount ActionCable.server => '/cable'

end
