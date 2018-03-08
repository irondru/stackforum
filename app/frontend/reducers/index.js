import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import universalReducer from './universalReducer'
import { GET_TOPIC, GET_QUESTION, GET_TOPICS, USER_QUERY } from '../constants'

const getUniversalRudecer = actionType =>
  (state, action, _actionType = actionType) =>
    universalReducer(state, action, _actionType)

export default combineReducers({
    topic: getUniversalRudecer(GET_TOPIC),
    question: getUniversalRudecer(GET_QUESTION),
    user: getUniversalRudecer(USER_QUERY),
    topics: getUniversalRudecer(GET_TOPICS),
    routing: routerReducer
})
