module Voted
  extend ActiveSupport::Concern

  included do
    before_action :set_post, only: :change_vote
  end

  def change_vote
    case vote_params[:action]
    when 'UP_VOTE'
      render json: responce(1)
    when 'DOWN_VOTE'
      render json: responce(-1)
    end
  end

  private

  def responce(change_to)
    {
      vote: {
        score: @post.change_vote(current_user, change_to),
        votable_type: @post.class.to_s,
        votable_id: @post.id
      }
    }
  end

  def set_post
    @post = controller_name.classify.constantize.find(params[:id])
  end

  def vote_params
    params.require(:vote).permit(:action)
  end

end
