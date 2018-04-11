import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'
import * as methods from 'const/methods'

export const getTopics = (page = 0) =>
  feedback.actions(
    page ? apiConst.TOPICS_PAGES + page : apiConst.TOPICS,
    methods.GET,
    page ? types.QUESTIONS_PAGE : types.QUESTIONS_INDEX
  )
