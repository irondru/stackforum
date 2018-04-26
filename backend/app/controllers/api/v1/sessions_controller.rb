class Api::V1::SessionsController < Devise::SessionsController

  include CorsHeaders
  include AbilityScope

  layout false

  protect_from_forgery
  skip_before_action :verify_authenticity_token

  def create
      self.resource = warden.authenticate(auth_options)
      if self.resource
        sign_in(resource_name, self.resource)
        render json: current_user
      else
        render json: {msg: "Email не найден, либо пароль неверен"}, status: 401
      end
  end

  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    render json: {}
  end

end
