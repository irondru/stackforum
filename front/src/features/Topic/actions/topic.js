import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getTopic = id =>
  feedback.actions(
    apiConst.TOPICS + id,
    methods.GET,
    types.QUESTIONS_SHOW
  )

export const deleteTopic = id =>
  feedback.actions(
    apiConst.TOPICS + id,
    methods.DELETE,
    QUESTIONS_DESTROY
  )
