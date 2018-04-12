import feedback, { methods } from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const createComment = (comment, commentableType, commentableId) =>
  feedback.actions(
    {
      ['answer']: () => apiConst.COMMENTS_CREATE_FOR_ANSWER.replace('{id}', commentableId),
      ['question']: () => apiConst.COMMENTS_CREATE_FOR_QUESTION.replace('{id}', commentableId)
    }[commentableType](),
    methods.POST,
    types.COMMENTS_CREATE,
    { comment }
  )

export const updateComment = (comment, id) =>
  feedback.actions(
    apiConst.COMMENTS + id,
    methods.PATCH,
    types.COMMENTS_UPDATE,
    { comment }
  )

export const deleteComment = id =>
  feedback.actions(
    apiConst.COMMENTS + id,
    methods.DELETE,
    types.COMMENTS_DESTROY
  )

export const editComment = id => ({
  type: types.COMMENTS_EDIT + feedback.statuses.SUCCESS,
  id
})
