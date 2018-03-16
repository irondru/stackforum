class CustomSessionsController < Devise::SessionsController
  after_action :after_login, only: :create

  def after_login
    cookies[:secret] = '123'
  end
end