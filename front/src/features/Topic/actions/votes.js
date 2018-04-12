import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const changeVote = (votableType, votableId, action) =>
  feedback.actions(
    {
      ['answer']: () => API_ANSWER_VOTE_CHANGE_PATH.replace(ID, votableId),
      ['question']: () => API_QUESTION_VOTE_CHANGE_PATH.replace(ID, votableId)
    }[votableType](),
    methods.POST,
    types.VOTES,
    { vote: { action } }
  )
