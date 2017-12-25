class AnswersController < ApplicationController
  include Voted
  include Commented

  before_action :authenticate_user!
  before_action :set_answer, except: :create
  after_action :stream_answer, only: [:create, :update, :destroy]

  respond_to :js

  authorize_resource

  def create
    respond_with(@answer = Answer.create(answer_params))
  end

  def update
    @answer.update(answer_params)
    respond_with(@answer)
  end

  def destroy
    @answer_id = @answer.id
    @answer.destroy
  end

  def best
    @answer.set_best if @answer.question.user == current_user
    respond_with(@answer)
  end

  private

  def stream_answer
    return unless @answer.valid?
    QuestionChannel.broadcast_to(@answer.question,
                                 AnswerPresenter.new(@answer).as(action_name))
  end

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def set_question
    @question = Question.find(params[:question_id])
  end

  def answer_params
    params.require(:answer).permit(:body, attachments_attributes: [:id, :file])
        .merge(user: current_user)
  end

end