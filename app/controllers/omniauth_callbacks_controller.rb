class OmniauthCallbacksController < Devise::OmniauthCallbacksController

  before_action :set_user

  def facebook
  end

  def vkontakte
  end

  private

  def set_user
    @user = User.find_for_oauth(request.env['omniauth.auth'])
    if @user.persisted?
      sign_in_and_redirect @user, event: :authentication
      set_flash_message(:notice, :success, kind: action_name.capitalize) if is_navigational_format?
    end
  end

end