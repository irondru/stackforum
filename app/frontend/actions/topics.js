import * as actions from './';
import { get } from '../api';
import { GET_TOPICS, GET_TOPIC } from './actionsTypes';

export const fetchTopics = () => dispatch =>
  get('/api/v1/questions')
    .then(respond => respond.json())
    .then(topics =>  dispatch({
          type: GET_TOPICS,
          payload: topics
         })
    )

export function fetchTopic(id) {
  return function (dispatch) {
    get('/api/v1/questions/' + id)
    .then(respond => respond.json())
    .then(topic => {
      dispatch(actions.updateTopic(topic))
    })
  }
}

export function updateTopic(topic) {
  return {
    type: GET_TOPIC,
    payload: topic
  }
}
