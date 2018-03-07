class Api::V1::ApplicationController < ActionController::Base

  serialization_scope :current_ability

  def current_ability
    @current_ability ||= Ability.new(current_user)
  end

end
