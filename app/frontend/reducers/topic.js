import { SUCCESS, ANSWER_REQUEST, INITIAL_EDIT, ACTIONS, GET_TOPIC,
  CREATE, UPDATE, DESTROY } from '../constants'
import apiReducer from './api'

export default (state, action) => {
  switch (action.type ^ ANSWER_REQUEST + SUCCESS) {
    case CREATE:
      return {
        ...state,
        fetching: 0,
        payload: {
          answers: [...state.payload.answers, action.payload]
        }
      }
    case UPDATE:
      return {
        ...state,
        fetching: 0,
        payload: {
          answers: state.payload.answers.map(answer => {
            //console.log(action.payload);
          return answer.id === action.payload.answer.id ? action.payload.answer : answer
        })
        }
      }
    case INITIAL_EDIT:
      return {
        ...state,
        payload: {
          answers: state.payload.answers.map(answer =>
            answer.id === action.id ? { ...answer, edit: !answer.edit }
             : { ...answer, edit: false }
          )
        }
      }
    default:
      return apiReducer(state, action, GET_TOPIC + ANSWER_REQUEST)
  }
}
