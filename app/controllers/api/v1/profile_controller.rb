class Api::V1::ProfileController < Api::V1::ApplicationController
  respond_to :json

  def show
    render json: current_user, serializer: UserSerializer
  end

end
