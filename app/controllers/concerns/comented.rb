module Commented
  extend ActiveSupport::Concern

  included do
    before_action :set_commentable, only: :add_comment
  end

  def add_comment

  end

end