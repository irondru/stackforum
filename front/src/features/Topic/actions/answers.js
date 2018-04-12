import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const createAnswer = (answer, questionId) =>
  feedback.actions(
    apiConst.ANSWER_CREATE.replace('{id}', questionId),
    methods.POST,
    types.ANSWERS_CREATE,
    { answer }
  )

export const updateAnswer = (answer, id) =>
  feedback.actions(
    apiConst.ANSWERS + id,
    methods.PATCH,
    types.ANSWERS_UPDATE,
    { answer }
  )

export const bestAnswer = id =>
  feedback.actions(
    apiConst.ANSWERS_BEST.replace('{id}', id),
    methods.POST,
    types.ANSWERS_BEST
  )

export const deleteAnswer = id =>
  feedback.actions(apiConst.ANSWERS + id,
    methods.DELETE,
    types.ANSWERS_DESTROY
  )

export const editAnswer = id => ({
    type: ANSWERS + EDIT + SUCCESS,
    id
  })
