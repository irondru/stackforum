import { SUCCESS, ANSWER_REQUEST, ANSWER_EDIT, ACTIONS, GET_TOPIC } from '../constants'
import apiReducer from './api'


export default (state, action) => {
  switch (action.type) {
    case ANSWER_REQUEST + SUCCESS:
      return {
        fetching: 0,
        payload: {
          answers: [...state.data.answers, action.payload]
        }
      }
    case ANSWER_EDIT:
      return {
        payload: {
          answers: state.data.answers.map(answer =>
            answer.id === action.id ? { ...answer, edit: !answer.edit }
             : { ...answer, edit: false }
          )
        }
      }
    default:
      return apiReducer(state, action, GET_TOPIC + ANSWER_REQUEST)
  }
}
