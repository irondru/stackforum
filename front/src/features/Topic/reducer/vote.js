import { pushInPayload } from 'features/utils'
import { statuses } from 'feedback'
import * as types from '../actionTypes'
import { votableTypes } from '../containers/Vote'

export default (state, action) => {
  if (action.type === types.VOTES + statuses.SUCCESS)
    return pushInPayload(state, {
      [votableTypes.ANSWER]: () => ({
        answers: state.payload.answers.map(answer =>
        answer.id === action.payload.vote.votable_id ? {
          ...answer,
          score: action.payload.vote.score
        }
        : answer )
      }),
      [votableTypes.QUESTION]: () => ({
        question: {
          ...state.payload.question,
          score: action.payload.vote.score
        }
      })
    }[action.payload.vote.votable_type]())
}
