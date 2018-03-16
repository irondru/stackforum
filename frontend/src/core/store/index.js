import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk))
}
