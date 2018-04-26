class Api::V1::RegistrationsController < Devise::RegistrationsController

  include CorsHeaders
  include AbilityScope

  layout false

  serialization_scope :view_context

  protect_from_forgery
  skip_before_action :verify_authenticity_token

  def create
      build_resource(sign_up_params)
      resource.save

      unless resource.persisted?
        render json: {
          msg: resource.errors.full_messages.first,
          errors: resource.errors,
        }, status: 403
      else
        sign_up(resource_name, resource)

        render json: current_user
      end
  end

  private

    def sign_up_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
