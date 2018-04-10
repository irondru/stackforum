import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './features/UserAuth/reducer'

export default combineReducers({
  routing: routerReducer,
  user
})
