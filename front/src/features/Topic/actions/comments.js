import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'
import { COMMENTABLE } from '../models'

export const createComment = comment =>
  feedback.post(
    {
      [COMMENTABLE.ANSWER]: () => apiConst.COMMENTS_CREATE_FOR_ANSWER.replace('{id}', comment.commentableId),
      [COMMENTABLE.QUESTION]: () => apiConst.COMMENTS_CREATE_FOR_QUESTION.replace('{id}', comment.commentableId)
    }[comment.commentableType](),
    types.COMMENTS_CREATE,
    { comment }
  )

export const updateComment = comment =>
  feedback.patch(
    apiConst.COMMENTS + comment.id,
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
