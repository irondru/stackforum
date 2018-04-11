import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import User from './features/User'

export default combineReducers({
  routing: routerReducer,
  user: User.reducer
})
