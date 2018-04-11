import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import User from 'features/User'
import Topics from 'features/Topics'

export default combineReducers({
  routing: routerReducer,
  user: User.reducer,
  topics: Topics.reducer
})
