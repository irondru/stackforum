import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import topic from 'containers/topic/reducer'
import question from 'containers/new-or-edit-question/reducer'
import user from 'containers/user/reducer'
import topics from 'containers/topics-list/reducer'

export default combineReducers({
    topic,
    question,
    user,
    topics,
    routing: routerReducer
})
