import createApiActions from './createApiActions'
import {
  GET_TOPIC, QUERY_QUESTION, GET_TOPICS, API_TOPICS_PATH, EDIT_QUESTION,
  QUESTION_REQUEST, USER_REQUEST, API_SIGN_IN_PATH, API_SIGN_OUT_PATH, API_PROFILE_PATH,
  GET, POST, PATCH, DELETE, API_CREATE_ANSWER_PATH, ANSWER_REQUEST, ANSWER_EDIT
} from '../constants';

export const getTopic = id =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_TOPIC)

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, GET_TOPICS)

export const initialEditQuestion = id =>
  createApiActions(API_TOPICS_PATH + id, GET, QUESTION_REQUEST)

export const newOrUpdateQuestion = (question, id) =>
  createApiActions(API_TOPICS_PATH + id, !!id ? PATCH : POST, QUESTION_REQUEST, { question })

export const createAnswer = (answer, questionId) =>
  createApiActions(API_CREATE_ANSWER_PATH.replace('{questionId}', questionId), POST, ANSWER_REQUEST, { answer })

export const editAnswer = id => dispatch =>
  dispatch({
    type: ANSWER_EDIT,
    id
  })

export const signIn = user =>
  createApiActions(API_SIGN_IN_PATH, POST, USER_REQUEST, { user })

export const signOut = () =>
  createApiActions(API_SIGN_OUT_PATH, DELETE, USER_REQUEST)

export const getProfile = () =>
  createApiActions(API_PROFILE_PATH, GET, USER_REQUEST)
