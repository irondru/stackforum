import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import topic from './topic'
import topics from './topics'
import user from './user'
import question from './question'

export default combineReducers({
    topic,
    topics,
    question,
    user,
    routing: routerReducer
})
