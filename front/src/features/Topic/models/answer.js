const answer = {
  id: null,
  body: '',
  comments: [],
  score: null,
  attachments: [],
  author: {},
  posted_at: null,
  question_id: null
}

export const createAnswerItem = props => ({
  ...answer,
  ...props
})
