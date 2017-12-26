class QuestionsController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show, :load_part]
  before_action :set_question, only: [:show, :edit, :update, :destroy]
  after_action :stream_question, only: [:create, :destroy]

  include Voted
  include Commented

  PART_SIZE = 10

  respond_to :html

  authorize_resource

  def index
    @questions = Question.last_part(PART_SIZE)
  end

  def load_part
    render json: Question.previews(params[:start_id], PART_SIZE)
  end

  def show
    @answer = @question.answers.new
  end

  def new
    @question = Question.new
  end

  def edit

  end

  def update
    @question.update(question_params)
    respond_with @question
  end

  def create
    respond_with(@question = current_user.questions.create(question_params))
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
            {action: :create, data: ApplicationController.render(
                partial: 'questions/question',
                locals: {question: @question, current_user: nil})}
        )
      when 'destroy'
        ActionCable.server.broadcast(
            'questions',
            {action: :destroy, data: @question.id.to_s}
        )
    end
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :body, attachments_attributes: [:id, :file])
  end

end