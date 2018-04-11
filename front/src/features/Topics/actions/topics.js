import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getTopics = (page = 0) =>
  feedback.actions(
    page ? apiConst.TOPICS_PAGES + page : apiConst.TOPICS,
    methods.GET,
    page ? types.QUESTIONS_PAGES : types.QUESTIONS_INDEX
  )

export const searchTopics = query =>
  feedback.actions(apiConst.TOPICS_SEARCH + query, methods.GET, types.QUESTIONS_INDEX)

export const initialEditQuestion = id =>
  feedback.actions(apiConst.TOPICS + id, methods.GET, '@@QUESTION_SHOW')

export const newOrUpdateQuestion = (question, id) => {
  id = id || ''
  return feedback.actions(
    apiConst.TOPICS + id,
    id === '' ? methods.POST : methods.PATCH ,
    '@@QUESTION_NEW', 
    { question }
  )
}
