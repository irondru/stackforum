import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const createAnswer = answer =>
  feedback.post(
    apiConst.ANSWER_CREATE.replace('{id}', answer.question_id),
    types.ANSWERS_CREATE,
    { answer }
  )

export const updateAnswer = answer =>
  feedback.patch(
    apiConst.ANSWERS + answer.id,
    types.ANSWERS_UPDATE,
    { answer }
  )

export const bestAnswer = id =>
  feedback.post(
    apiConst.ANSWERS_BEST.replace('{id}', id),
    types.ANSWERS_BEST
  )

export const deleteAnswer = id =>
  feedback.destroy(
    apiConst.ANSWERS + id,
    types.ANSWERS_DESTROY
  )

export const editAnswer = id => ({
    type: types.ANSWERS_EDIT + feedback.statuses.SUCCESS,
    id
  })
