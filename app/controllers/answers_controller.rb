class AnswersController < ApplicationController
  include Voted
  include Commented

  before_action :authenticate_user!
  before_action :set_answer, except: :create

  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)
    @answer.user = current_user
    @answer.save
    stream_answer(:create)
  end



  def show

  end

  def edit
    @question = @answer.question
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
      stream_answer(:destroy)
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

  def stream_answer(action)
    AnswersChannel.broadcast_to(@answer.question,
                                AnswerPresenter.new(@answer).as(action))
  end

  def set_answer
    @answer = Answer.find(params[:id])
  end


  def answer_params
    params.require(:answer).permit(:body, attachments_attributes: [:id, :file])
  end

end