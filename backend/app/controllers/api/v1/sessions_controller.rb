class Api::V1::SessionsController < Devise::SessionsController
  # after_action :set_csrf_headers, only: [:create, :destroy]

  serialization_scope :current_ability

  def current_ability
    @current_ability ||= Ability.new(current_user)
  end

  def create
      self.resource = warden.authenticate(auth_options)
      if self.resource
        sign_in(resource_name, self.resource)
        render json: Oj.dump(current_user)
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