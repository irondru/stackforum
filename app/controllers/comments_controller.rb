class CommentsController < ApplicationController
  include Commented

  before_action :authenticate_user!

  def update

  end

  def destroy
    @comment = Comment.find(params[:id])
    stream_comment(:destroy)
    @comment.destroy
  end

end