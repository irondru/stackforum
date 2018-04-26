module Commented
  extend ActiveSupport::Concern

  included do
    before_action :set_commentable, only: :new_comment
    #after_action :stream_comment, only: [:update, :destroy, :new_comment]
  end

  def new_comment
    @comment = @commentable.comments.new(comment_params)
    if @comment.save
      render json: {
        comment: CommentSerializer.new(@comment, {scope: current_ability} ),
        commentable_type: @comment.commentable_type,
        commentable_id: @comment.commentable_id
      }
    else
      render json: { comment: @comment.errors.messages }, status: 422  
    end
  end

  private

  def set_commentable
    @commentable = controller_name.classify.constantize.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body).merge(user: current_user)
  end

  def stream_comment
    return if @comment.nil? || !@comment.valid?
    comment = CommentPresenter.new(@comment)
    QuestionChannel.broadcast_to(comment.question, comment.as(action_name))
  end
end
