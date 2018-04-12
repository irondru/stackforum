import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const changeVote = (votableType, votableId, action) =>
  feedback.actions(
    {
      ['answer']: () => apiConst.COMMENTS_CREATE_FOR_ANSWER.replace('{id}', votableId),
      ['question']: () => apiConst.COMMENTS_CREATE_FOR_QUESTION.replace('{id}', votableId)
    }[votableType](),
    methods.POST,
    types.VOTES,
    { vote: { action } }
  )
