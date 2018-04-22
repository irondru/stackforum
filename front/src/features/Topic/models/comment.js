export const COMMENTABLE = {
  QUESTION: 'Question',
  ANSWER:   'Answer'
}

const comment = {
  id: null,
  body: '',
  access: false,
  author: {},
  posted_at: '',
  commentableId: null,
  commentableType: ''
}

export const createCommentItem = props => ({
  ...comment,
  ...props
})
