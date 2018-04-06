class Search < ApplicationRecord

  def self.result(query)
    ThinkingSphinx.search(ThinkingSphinx::Query.escape(query), classes: MODELS)
  end

  private

  MODELS = [Question, Answer, Comment, User].freeze

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
