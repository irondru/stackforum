import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'
import { votableTypes } from '../containers/Vote'

export const changeVote = (votableType, votableId, action) =>
  feedback.post(
    {
      [votableTypes.ANSWER]: () => apiConst.VOTE_CHANGE_ANSWER.replace('{id}', votableId),
      [votableTypes.QUESTION]: () => apiConst.VOTE_CHANGE_QUESTION.replace('{id}', votableId)
    }[votableType](),
    types.VOTES,
    { vote: { action } }
  )
