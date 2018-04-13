import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const createComment = (comment, commentableType, commentableId) =>
  feedback.post(
    {
      ['answer']: () => apiConst.COMMENTS_CREATE_FOR_ANSWER.replace('{id}', commentableId),
      ['question']: () => apiConst.COMMENTS_CREATE_FOR_QUESTION.replace('{id}', commentableId)
    }[commentableType](),
    types.COMMENTS_CREATE,
    { comment }
  )

export const updateComment = (comment, id) =>
  feedback.patch(
    apiConst.COMMENTS + id,
    types.COMMENTS_UPDATE,
    { comment }
  )

export const deleteComment = id =>
  feedback.destroy(
    apiConst.COMMENTS + id,
    types.COMMENTS_DESTROY
  )

export const editComment = id => ({
  type: types.COMMENTS_EDIT + feedback.statuses.SUCCESS,
  id
})
