class QuestionsChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_from 'questions'
  end

end