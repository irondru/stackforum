import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import User from 'features/User'
import Topics from 'features/Topics'
import Topic from 'features/Topic'

export default combineReducers({
  routing: routerReducer,
  user: User.reducer,
  topics: Topics.reducer,
  topic: Topic.reducer
})
