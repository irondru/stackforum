class CommentPresenter

  def initialize(comment)
    @comment = comment
    @owner = comment.commentable
  end

  def as(presence)
    send("present_as_#{presence}")
  end

  def present_as_create
    {
        action: :create_comment,
        comment: @comment,
        destination_id: "##{@owner.class.to_s.downcase}-comments-#{@owner.id}"
    }
  end

  def present_as_destroy
    {
        action: :destroy_comment,
        comment_id: @comment.id
    }
  end

  def question
    case @owner
      when Question then @owner
      when Answer then @owner.question
    end
  end

end