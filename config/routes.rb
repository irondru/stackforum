Rails.application.routes.draw do
  devise_for :users

  concern :votable do
    member do
      get :up_vote
      get :down_vote
    end
  end

  resources :questions, concerns: :votable do
    resources :answers, only: [:create, :update]
  end

  resources :answers, concerns: :votable, only: :destroy do
    get :best, on: :member
  end

  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'
end
