class Api::V1::ApplicationController < ActionController::Base

  serialization_scope :current_ability
  before_action :set_headers

  protect_from_forgery
  skip_before_action :verify_authenticity_token

  def set_headers
    response.headers["Access-Control-Allow-Credentials"] = 'true'
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Methods'] = 'GET, PATCH, PUT, DELETE, POST, OPTIONS'
  end


  def current_ability
    @current_ability ||= Ability.new(current_user)
  end

end
