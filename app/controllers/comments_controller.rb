class CommentsController < ApplicationController
  include Commented

  before_action :authenticate_user!
  before_action :set_comment
  before_action :check_user

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

  def check_user
    return if @comment.user != current_user
  end
end