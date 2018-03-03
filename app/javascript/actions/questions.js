import * as actions from './';
import {api} from '../api';

export function fetchQuestions() {
  return function (dispatch) {
    api.get('http://localhost:3000/api/v1/questions')
      .then( respond => respond.json())
      .then(questions => {
        dispatch(actions.updateQuestions(questions))
      })
  }
}

export function updateQuestions(questions) {
  return {
    type: "UPDATE_QUESTIONS",
    payload: questions
  }
}
