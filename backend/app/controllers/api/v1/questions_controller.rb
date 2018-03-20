class Api::V1::QuestionsController < Api::V1::ApplicationController

  #require 'oj'
  before_action :authenticate_user!, only: [:update, :create, :destroy]
  before_action :set_question, only: [:show, :update, :destroy]
  #after_action :stream_question, only: [:create, :destroy]

  include Commented
  include Voted

  authorize_resource

  def index
    render json: { topics: Question.last_part }, each_serializer: QuestionsListItemSerializer
  end

  def show
    render json: @question
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      render json: { question: { redirectTo: @question.id } }
    else
      render json: 'validation error', status: 422
    end
  end

  def update
    if @question.update(question_params)
      render json: { question: { redirectTo: @question.id } }
    else
      render json: 'validation error', status: 422
    end
  end

  def destroy
    respond_with @question.destroy
  end

  private

  def stream_question
    return unless @question.valid?
    case action_name
      when 'create'
        ActionCable.server.broadcast(
            'questions',
              {action: :create,
               question: ActiveModelSerializers::SerializableResource.new(@question).as_json}
        )
      when 'destroy'
        ActionCable.server.broadcast(
            'questions',
              {action: :destroy,
               question: @question.id.to_s}
        )
    end
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :body, attachments_attributes: [:file])
  end

end
