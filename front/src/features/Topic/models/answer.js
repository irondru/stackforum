const answer = {
  id: null,
  body: '',
  access: false,
  comments: [],
  score: null,
  attachments: [],
  author: {},
  posted_at: '',
  question_id: null
}

const createAnswerItem = props => ({
  ...answer,
  ...props
})

export default createAnswerItem
