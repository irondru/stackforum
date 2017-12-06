Rails.application.routes.draw do
  devise_for :users
  resources :questions do
    resources :answers, only: [:create, :update, :destroy]
  end

  get '/bestanswer/:id', to: 'answers#best', as: 'best_answer'
  delete '/attach/:id', to: 'attachments#destroy', as: 'attachment_destroy'

  root 'questions#index'
end
