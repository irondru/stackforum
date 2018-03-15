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
    end
  end

  def update
    if @answer.update(answer_params)
      render json: @answer, serializer: AnswerSerializer
    end
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
    params.require(:answer).permit(:body, attachments: [:id, :file])
        .merge(user: current_user)
  end

end
