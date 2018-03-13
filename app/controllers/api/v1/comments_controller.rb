class Api::V1::CommentsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_comment

  include Commented

  authorize_resource

  def update
    if @comment.update(comment_params)
      render json: { comment: CommentSerializer.new(@comment),
        commentable_type: @comment.commentable_type,
        commentable_id: @comment.commentable_id }
    end    
  end

  def destroy
    @comment.destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

end
