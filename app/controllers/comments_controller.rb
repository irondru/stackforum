class CommentsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_comment

  include Commented

  authorize_resource

  def update
    @comment.update(comment_params)
  end

  def destroy
    @comment.destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

end