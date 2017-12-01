Rails.application.routes.draw do
  devise_for :users
  resources :questions do
    resources :answers, only: [:create, :update, :destroy]
  end

  get '/bestanswer/:id', to: 'answers#best', as: 'best_answer'

  root 'questions#index'
end
