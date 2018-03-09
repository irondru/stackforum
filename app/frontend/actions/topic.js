import createApiActions from './createApiActions'
import { GET_TOPIC, QUERY_QUESTION, GET_TOPICS,
  API_TOPICS_PATH, EDIT_QUESTION, GET_QUESTION, GET, POST, PATCH } from '../constants';

export const getTopic = (id) =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_TOPIC)

export const editQuestion = (id) =>
  createApiActions(API_TOPICS_PATH + id, GET, GET_QUESTION)

export const getTopics = () =>
  createApiActions(API_TOPICS_PATH, GET, GET_TOPICS)

export const postQuestion = (question, edit) =>
  createApiActions(API_TOPICS_PATH, POST, GET_QUESTION, { question })
