import answerReducer from './answer'
import commentReducer from './comment'
import voteReducer from './vote'
import { apiReducer } from 'core'
import { QUESTIONS, SHOW, ANSWERS, COMMENTS, VOTES } from 'core/constants'

export default (state, action) =>
  answerReducer(state, action) ||
  commentReducer(state, action) ||
  voteReducer(state, action) ||
  apiReducer(state, action, QUESTIONS + SHOW + ANSWERS + COMMENTS + VOTES)
