module Api::V1::Voted
  extend ActiveSupport::Concern

  included do
    before_action :set_post, only: [:up_vote, :down_vote]
  end

  def up_vote
    render json: respond(1)
  end

  def down_vote
    render json: respond(-1)
  end

  private

  def respond(change_to)
    { elem_id: controller_name.singularize + '-vote-' + @post.id.to_s,
      score: @post.change_vote(current_user, change_to) }
  end

  def set_post
    @post = controller_name.classify.constantize.find(params[:id])
  end

end
