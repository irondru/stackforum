import answerReducer from './answer'
import commentReducer from './comment'
import voteReducer from './vote'
import { apiReducer } from 'core'
import { GET_TOPIC, ANSWER, COMMENT, VOTE } from 'core/constants'

export default (state, action) =>
  answerReducer(state, action) ||
  commentReducer(state, action) ||
  voteReducer(state, action) ||
  apiReducer(state, action, GET_TOPIC + ANSWER + COMMENT + VOTE)
