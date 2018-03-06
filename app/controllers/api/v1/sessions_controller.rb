class Api::V1::SessionsController < Devise::SessionsController
  after_action :set_csrf_headers, only: [:create, :destroy]

  def create
      self.resource = warden.authenticate(auth_options)
      if self.resource
        sign_in(resource_name, self.resource)
        render json: {msg: "Вы успешно авторизовались в системе", current_user: current_user.as_json}
      else
        render json: {msg: "Email не найден, либо пароль неверен"}, status: 401
      end
  end

  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    render json: {msg: "Вы успешно вышли"}
  end

  protected
  def set_csrf_headers
    cookies['CSRF-Token'] = form_authenticity_token if protect_against_forgery?
  end
end
