import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getTopic = id =>
  feedback.get(
    apiConst.TOPICS + id,
    types.QUESTIONS_SHOW
  )

export const deleteTopic = id =>
  feedback.destroy(
    apiConst.TOPICS + id,
    types.QUESTIONS_DESTROY
  )
