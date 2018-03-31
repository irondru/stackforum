class Api::V1::ProfileController < Api::V1::ApplicationController
  respond_to :json

  def show
    if current_user
      render json: current_user, serializer: UserSerializer
    else
      render json: {}
    end
  end

  def avatar_uploader
    @avatar = Avatar.new(avatar_params)
    @avatar.save
  end

  private

  def avatar_params
    {
      image: params[:avatar][:image].first[:file], #ахтунг код дабы не плодить похожие методы на фронте
      user_id: current_user.id
    }
  end

end
