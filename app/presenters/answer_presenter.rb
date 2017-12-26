class AnswerPresenter

  def initialize(answer)
    @answer = answer
  end

  def as(presence)
    send("present_as_#{presence}")
  end

  def present_as_create
    {
        action: :create_answer,
        answer: @answer,
        attachments: attachments
    }
  end

  def present_as_update
    {
        action: :update_answer,
        answer: @answer,
        destination_id: "#answer-#{@answer.id}"
    }
  end

  def present_as_destroy
    {
        action: :destroy_answer,
        answer_id: @answer.id
    }
  end

  private

  def attachments
    attachs = []
    @answer.attachments.each { |a| attachs << {id: a.id, name: a.file.identifier, url: a.file.url} }
    attachs
  end

end