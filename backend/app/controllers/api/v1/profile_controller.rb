class Api::V1::ProfileController < Api::V1::ApplicationController
  respond_to :json

  def show
    if current_user
      render json: Oj.dump(current_user, serializer: UserSerializer)
    else
      render json: {}
    end
  end

end
