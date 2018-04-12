import { pushInPayload } from 'features/helpers'
import { status, action, statuses } from 'feedback'
import * as types from '../actionTypes'

const TYPE_ANSWER = 'Answer'
const TYPE_QUESTION = 'Question'

export default (state, action) => {
  if (action.type === types.VOTES + statuses.SUCCESS)
    return pushInPayload(state, {
      [TYPE_ANSWER]: () => ({
        answers: state.payload.answers.map(answer =>
        answer.id === action.payload.vote.votable_id ? {
          ...answer,
          score: action.payload.vote.score
        }
        : answer )
      }),
      [TYPE_QUESTION]: () => ({
        question: {
          ...state.payload.question,
          score: action.payload.vote.score
        }
      })
    }[action.payload.vote.votable_type]())
}
