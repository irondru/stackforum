import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getTopics = (page = 0) =>
  feedback.get(
    page ? apiConst.TOPICS_PAGES + page : apiConst.TOPICS,
    page ? types.QUESTIONS_PAGES : types.QUESTIONS_INDEX
  )

export const searchTopics = query =>
  feedback.get(
    apiConst.TOPICS_SEARCH + query,
    types.QUESTIONS_INDEX
  )

export const initialEditQuestion = id =>
  feedback.get(
    apiConst.TOPICS + id,
    types.QUESTION_SHOW
  )

export const newOrUpdateQuestion = question => {
  question.id = question.id || ''
  return feedback.actions(
    question.id === '' ? 'POST' : 'PATCH',
    apiConst.TOPICS + question.id,
    types.QUESTIONS_NEW,
    { question }
  )
}
