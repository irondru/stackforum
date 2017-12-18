class CommentsController < ApplicationController
  before_action :authenticate_user!

  def update

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

end