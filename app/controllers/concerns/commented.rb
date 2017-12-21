module Commented
  extend ActiveSupport::Concern

  included do
    before_action :set_commentable, only: :new_comment
    after_action :stream_comment, only: [:update, :destroy, :new_comment]
  end

  def new_comment
    @comment = @commentable.comments.new(comment_params)
    render 'comments/new_comment' if @comment.save
  end

  private

  def set_commentable
    @commentable = controller_name.classify.constantize.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body).merge(user: current_user)
  end

  def stream_comment
    return unless @comment.valid?
    comment = CommentPresenter.new(@comment)
    QuestionChannel.broadcast_to(comment.question, comment.as(action_name))
  end
end