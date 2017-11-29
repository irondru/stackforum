class AnswersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :set_answer, only: [:show, :edit, :update, :destroy]
  before_action :set_question, only: [:edit, :create, :update]

  def create
    @answer = @question.answers.new(answer_params)
    @answer.user = current_user
    if @answer.save
      redirect_to @answer.question
    else
      render template: 'questions/show'
    end
  end

  def edit

  end

  def update
    if @answer.update(answer_params)
      redirect_to @answer.question
    else
      render :edit
    end
  end

  def destroy
    question = @answer.question
    @answer.destroy if @answer.user == current_user
    redirect_to question
  end

  private

  def set_question
    @question = Question.find(params[:question_id])
  end

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:body)
  end

end