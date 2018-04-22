const question = {
  id: null,
  title: '',
  body: '',
  attachments: [],
  comments: [],
  created_at: ''
}

export const createQuestionItem = () => ({
  ...question
})
