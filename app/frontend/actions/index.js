import createApiActions from './createApiActions'
import {
  GET_TOPIC, QUERY_QUESTION, GET_TOPICS, API_TOPICS_PATH, EDIT_QUESTION,
  QUESTION_REQUEST, USER_REQUEST, API_SIGN_IN_PATH, API_SIGN_OUT_PATH, API_PROFILE_PATH,
  GET, POST, PATCH, DELETE
} from '../constants';

export const getTopic = (id) =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_TOPIC)

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, GET_TOPICS)

export const editQuestion = (id) =>
  createApiActions(API_TOPICS_PATH + id, GET, QUESTION_REQUEST)

export const postQuestion = (question, id) =>
  createApiActions(API_TOPICS_PATH + id, !!id ? PATCH : POST, QUESTION_REQUEST, { question })

export const signIn = user =>
  createApiActions(API_SIGN_IN_PATH, POST, USER_REQUEST, { user })

export const signOut = () =>
  createApiActions(API_SIGN_OUT_PATH, DELETE, USER_REQUEST)

export const getProfile = () =>
  createApiActions(API_PROFILE_PATH, GET, USER_REQUEST)
