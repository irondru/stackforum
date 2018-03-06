class Api::V1::ProfileController < ApplicationController
  respond_to :json

  def show
    respond_with current_user
  end

end
