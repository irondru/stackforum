import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import apiReducer from './api'
import topic from './topic'
import { GET_TOPIC, QUESTION_REQUEST, GET_TOPICS, USER_REQUEST, ANSWER_REQUEST } from '../constants'

const getApiReducer = actionType =>
  (state, action, _actionType = actionType) =>
    apiReducer(state, action, _actionType)

export default combineReducers({
    topic,
    question: getApiReducer(QUESTION_REQUEST),
    user: getApiReducer(USER_REQUEST),
    topics: getApiReducer(GET_TOPICS),
    routing: routerReducer
})
