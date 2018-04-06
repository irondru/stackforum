class Search < ApplicationRecord

  def self.result(query)
    get_parrent = ->(item) do
      case item.class.to_s  #case uses ===  :(
      when 'Question'
        return item
      when 'Answer'
        return item.question
      when 'Comment'
        case item.commentable.class.to_s
        when 'Question'
          return item.commentable
        when 'Answer'
          return item.commentable.question
        end
      end
    end

    ThinkingSphinx.search(ThinkingSphinx::Query.escape(query), classes: MODELS).map(&get_parrent)
  end

  private

  MODELS = [Question, Answer, Comment].freeze

  def self.get_models(params)
    params = params.to_i
    result = []
    i = 0
    while params > 0 do
      result << MODELS[i] if params & 1 == 1
      i += 1
      params >>= 1
    end
    result
  end

end
