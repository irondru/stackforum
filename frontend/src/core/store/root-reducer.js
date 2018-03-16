import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import topic from 'modules/topic/reducer'
import question from 'modules/new-or-edit-question/reducer'
import user from 'modules/user/reducer'
import topics from 'modules/topics-list/reducer'

export default combineReducers({
    topic,
    question,
    user,
    topics,
    routing: routerReducer
})
