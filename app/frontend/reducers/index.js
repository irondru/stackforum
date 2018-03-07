import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import topic from './topic'
import topics from './topics'
import user from './user'

export default combineReducers({
    topic,
    topics,
    user,
    routing: routerReducer
})
