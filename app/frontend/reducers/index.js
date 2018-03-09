import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import universalReducer from './universalReducer'
import topic from './topic'
import { GET_TOPIC, QUESTION_REQUEST, GET_TOPICS, USER_REQUEST, ANSWER_REQUEST } from '../constants'

const getUniversalRudecer = actionType =>
  (state, action, _actionType = actionType) =>
    universalReducer(state, action, _actionType)

export default combineReducers({
    topic,
    question: getUniversalRudecer(QUESTION_REQUEST),
    user: getUniversalRudecer(USER_REQUEST),
    topics: getUniversalRudecer(GET_TOPICS),
    routing: routerReducer
})
