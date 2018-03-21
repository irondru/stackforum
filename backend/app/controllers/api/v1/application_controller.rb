class Api::V1::ApplicationController < ActionController::Base

  include CorsHeaders
  include AbilityScope

  layout false

  protect_from_forgery
  skip_before_action :verify_authenticity_token

end
