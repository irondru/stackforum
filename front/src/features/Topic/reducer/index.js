import answerReducer from './answer'
import commentReducer from './comment'
import voteReducer from './vote'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) =>
  answerReducer(state, action) ||
  commentReducer(state, action) ||
  voteReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.QUESTIONS_SHOW,
      types.QUESTIONS_DESTROY,
      types.ANSWERS_CREATE,
      types.ANSWERS_UPDATE,
      types.ANSWERS_BEST,
      types.ANSWERS_DESTROY,
      types.COMMENTS_CREATE,
      types.COMMENTS_UPDATE,
      types.COMMENTS_DESTROY,
      types.VOTES
    ]
  )
