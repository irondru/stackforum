import { apiReducer, pushInPayload } from 'core'
import { QUESTIONS, INDEX, PAGE, SUCCESS } from 'core/constants'

export default (state, action) =>
  action.type === QUESTIONS + PAGE + SUCCESS ?
    pushInPayload(state, {
      topics: [
        ...state.payload.topics,
        ...action.payload.topics
      ]
    })
  : apiReducer(state, action, QUESTIONS + INDEX)
