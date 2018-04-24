const question = {
  id: null,
  title: '',
  body: '',
  attachments_attributes: [],
  comments: [],
  created_at: ''
}

export const createQuestionItem = () => ({
  ...question
})
