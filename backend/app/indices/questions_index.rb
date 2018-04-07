ThinkingSphinx::Index.define :question, with: :real_time do
  # fields
  indexes title, sortable: true
  indexes body
  indexes user.name, as: :author

  # attributes
  has created_at, type: :timestamp
  has updated_at, type: :timestamp

  #scope { Question.includes(:user) }
end
