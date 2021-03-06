class Api::V1::AnswersController < Api::V1::ApplicationController
  include Commented
  include Voted

  before_action :authenticate_user!
  before_action :set_answer, except: :create
  #after_action :stream_answer, only: [:create, :update, :destroy]

  authorize_resource

  def create
    @answer = Answer.new(answer_params.merge(question: set_question))
    if @answer.save
      render json: @answer, serializer: AnswerSerializer
    else
      render json: { msg: @answer.errors.values }, status: 422
    end
  end

  def update
    if @answer.update(answer_params)
      render json: @answer, serializer: AnswerSerializer
    else
      render json: { msg: @answer.errors.values }, status: 422
    end
  end

  def destroy
    @answer_id = @answer.id
    if @answer.destroy
      render json: { answer: { id: @answer_id } }
    end
  end

  def best
    if @answer.question.user == current_user
      @answer.set_best
      render json: { answer: { id: @answer.id } }
    end
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
    params.require(:answer).permit(:body, attachments_attributes: [:file])
        .merge(user: current_user)
  end

end
