ThinkingSphinx::Index.define :answer, with: :real_time do
  # fields
  indexes body
  indexes user.name, as: :author, sortable: true

  set_property :enable_star => 1
  set_property :min_prefix_len => 2

  #attributes


  scope { Answer.includes(:user) }
end
