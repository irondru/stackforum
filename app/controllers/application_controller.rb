class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :gon_user, unless: :devise_controller?


  private

  def gon_user
    if current_user
      gon.user_id = current_user.admin? ? -1 : current_user.id
    end
  end

  rescue_from CanCan::AccessDenied do |e|
    redirect_to root_url, alert: e.message
  end

end
