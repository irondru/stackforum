ThinkingSphinx::Index.define :answer, with: :real_time do
  # fields
  indexes body
  indexes user.name, as: :author, sortable: true

  #attributes
  has created_at, type: :timestamp
  has updated_at, type: :timestamp

end
