import answerReducer from './answer'
import commentReducer from './comment'
import voteReducer from './vote'
import feedback from 'feedback'
import * as types from '../actionTypes'
import { QUESTIONS, SHOW, ANSWERS, COMMENTS, VOTES } from 'core/constants'


export default (state, action) => {
  answerReducer(state, action) ||
  commentReducer(state, action) ||
  voteReducer(state, action) ||
  feedback.reducer(state, action, QUESTIONS + SHOW + ANSWERS + COMMENTS + VOTES)
