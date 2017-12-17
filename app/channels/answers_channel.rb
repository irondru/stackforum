class AnswersChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_for Question.find(params[:id])
  end
end