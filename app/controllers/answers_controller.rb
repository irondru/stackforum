class AnswersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :set_answer, only: [:update, :destroy, :best]

  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)
    @answer.user = current_user
    @answer.save
  end

  def update
    if @answer.user == current_user
      @answer.update(answer_params)
    else
      render nothing: true, status: 403
    end
  end

  def destroy
    if @answer.user == current_user
      @answer_id = @answer.id
      @answer.attachments.each { |ath| ath.destroy }
      @answer.destroy
    else
      render nothing: true, status: 403
    end
  end

  def best
    if @answer.user == current_user
      @answer.set_best
    else
      render nothing: true, status: 403
    end
  end

  private

  def set_answer
    @answer = Answer.find(params[:id])
  end


  def answer_params
    params.require(:answer).permit(:body, attachments_attributes: [:file])
  end

end