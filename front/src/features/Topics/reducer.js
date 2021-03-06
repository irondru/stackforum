import feedback, { statuses } from 'feedback'
import * as types from './actionTypes'
import { pushInPayload } from 'features/utils'

export default (state, action) =>
  action.type === types.QUESTIONS_PAGES + statuses.SUCCESS ?
    pushInPayload(state, {
      topics: [
        ...state.payload.topics,
        ...action.payload.topics
      ]
    })
  : feedback.reducer(
    state,
    action,
    [
      types.QUESTIONS_INDEX,
      types.QUESTIONS_NEW,
      types.QUESTION_SHOW
    ]
  )
