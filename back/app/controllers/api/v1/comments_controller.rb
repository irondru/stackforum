class Api::V1::CommentsController < Api::V1::ApplicationController

  before_action :authenticate_user!
  before_action :set_comment

  include Commented

  authorize_resource

  def update
    if @comment.update(comment_params)
      render json: {
        comment: CommentSerializer.new(@comment, {scope: current_ability}),
        commentable_type: @comment.commentable_type,
        commentable_id: @comment.commentable_id
      }
    end
  end

  def destroy
    res = {
      comment: {
        id: @comment.id
      },
      commentable_type: @comment.commentable_type,
      commentable_id: @comment.commentable_id
    }
    if @comment.destroy
      render json: res
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

end
