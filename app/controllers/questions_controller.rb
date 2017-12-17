class QuestionsController < ApplicationController
  include Voted
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
    @answer = @question.answers.new
    @answer.attachments.build
  end

  def new
    @question = Question.new
    @question.attachments.build
  end

  def edit

  end

  def update
    if @question.update(question_params)
      redirect_to @question
    else
      render :edit
    end
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      stream_question(:create)
      redirect_to @question
    else
      render :new
    end
  end

  def destroy
    if @question.user == current_user
      stream_question(:destroy)
      @question.destroy
    end
    redirect_to questions_path
  end

  private

  def stream_question(action)
    case action
      when :create
        ActionCable.server.broadcast(
            'questions',
            {action: :create, data: ApplicationController.render(
                partial: 'questions/question',
                locals: {question: @question, current_user: nil})}
        )
      when :destroy
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
    params.require(:question).permit(:title, :body, attachments_attributes: [:id, :file, :_destroy])
  end

end