module Voted
  extend ActiveSupport::Concern

  included do
    before_action :set_post, only: [:up_vote, :down_vote]
  end

  def up_vote
    @post.change_vote(current_user, 1)
  end

  def down_vote
    @post.change_vote(current_user, -1)
  end

  private

  def model_class
    controller_name.classify.constantize
  end

  def set_post
    @post = model_class.find(params[:id])
  end

end