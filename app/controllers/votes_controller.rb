class VotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post
  before_action :set_vote

  def up
    @vote.change(@post, 1)
  end

  def down
    @vote.change(@post, -1)
  end

  private

  def set_post
    case params[:post_type]
      when 'answer'
        @post = Answer.find(params[:id])
      when 'question'
        @post = Question.find(params[:id])
    end
  end

  def set_vote
    @vote = current_user.votes.find_vote(@post).first
    @vote = current_user.votes.new if @vote.nil?
  end

end