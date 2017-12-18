module Commented
  extend ActiveSupport::Concern

  included do
     before_action :set_commentable, only: :new_comment
  end

  def new_comment
    @comment = @commentable.comments.new(comment_params)
    @comment.save
    render nothing: true, status: 200
  end

  private

  def set_commentable
    @commentable = controller_name.classify.constantize.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body).merge(user: current_user)
  end

end