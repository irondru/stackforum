import { createApiActions } from 'core'
import { GET, PATCH, POST, CREATE, UPDATE, SUCCESS, API_ANSWER_CREATE_PATH,
  ANSWERS, QUESTIONS, COMMENTS, API_TOPICS_PATH, API_ANSWERS_PATH, EDIT, SHOW,
  API_COMMENTS_CREATE_ANSWER_PATH, ID, API_COMMENTS_CREATE_QUESTION_PATH,
  API_COMMENTS_PATH, API_QUESTION_VOTE_CHANGE_PATH, DELETE, DESTROY, API_ANSWER_VOTE_CHANGE_PATH,
  VOTES, BEST, API_BEST } from 'core/constants'

export const createAnswer = (answer, questionId) =>
  createApiActions(API_ANSWER_CREATE_PATH.replace('{questionId}', questionId),
    POST, ANSWERS + CREATE, { answer })

export const updateAnswer = (answer, id) =>
  createApiActions(API_ANSWERS_PATH + id, PATCH, ANSWERS + UPDATE, { answer })

export const bestAnswer = id =>
  createApiActions(API_ANSWERS_PATH + id + API_BEST, POST, ANSWERS + BEST )  

export const editAnswer = id => ({
    type: ANSWERS + EDIT + SUCCESS,
    id
  })

export const deleteAnswer = id =>
  createApiActions(API_ANSWERS_PATH + id, DELETE, ANSWERS + DESTROY)

export const editComment = id => ({
  type: COMMENTS + EDIT + SUCCESS,
  id
})

export const getTopic = id =>
  createApiActions(API_TOPICS_PATH + id, GET, QUESTIONS + SHOW)

export const deleteTopic = id =>
  createApiActions(API_TOPICS_PATH + id, DELETE, QUESTIONS + DESTROY)

export const createComment = (comment, commentableType, commentableId) =>
  createApiActions({
      [ANSWERS]: () => API_COMMENTS_CREATE_ANSWER_PATH.replace(ID, commentableId),
      [QUESTIONS]: () => API_COMMENTS_CREATE_QUESTION_PATH.replace(ID, commentableId)
    }[commentableType](), POST, COMMENTS + CREATE, { comment })

export const updateComment = (comment, id) =>
  createApiActions(API_COMMENTS_PATH + id, PATCH, COMMENTS + UPDATE, { comment })

export const deleteComment = id =>
  createApiActions(API_COMMENTS_PATH + id, DELETE, COMMENTS + DESTROY)

export const changeVote = (votableType, votableId, action) =>
  createApiActions({
    [ANSWERS]: () => API_ANSWER_VOTE_CHANGE_PATH.replace(ID, votableId),
    [QUESTIONS]: () => API_QUESTION_VOTE_CHANGE_PATH.replace(ID, votableId)
  }[votableType](), POST, VOTES, { vote: { action } } )
