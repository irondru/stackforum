import answerReducer from './answer'
import commentReducer from './comment'
import { apiReducer } from 'core'
import { GET_TOPIC, ANSWER, COMMENT } from 'core/constants'

export default (state, action) =>
  answerReducer(state, action) ||
  commentReducer(state, action) ||
  apiReducer(state, action, GET_TOPIC + ANSWER + COMMENT)
