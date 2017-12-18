Rails.application.routes.draw do
  devise_for :users

  concern :votable do
    member do
      get :up_vote
      get :down_vote
    end
  end

  concern :commentable do
    post :new_comment, on: :member
  end

  resources :questions, concerns: [:votable, :commentable] do
    resources :answers, only: [:create, :update]
  end

  resources :answers, concerns: [:votable, :commentable], only: [:edit, :destroy, :show] do
    get :best, on: :member
  end

  resources :comments, only: [:update, :destroy]

  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'

  mount ActionCable.server => '/cable'

end
