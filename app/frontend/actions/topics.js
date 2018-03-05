import * as actions from './';
import { get } from '../api';
import { GET_TOPICS, GET_TOPIC, REQUEST, SUCCESS } from '../constants';

export const fetchTopics = () => dispatch =>
  get('/api/v1/questions')
    .then(respond => respond.json())
    .then(topics => dispatch({
          type: GET_TOPICS,
          payload: topics
         })
    )

export function fetchTopic(id) {
  return function(dispatch) {
    dispatch({
      type: GET_TOPIC + REQUEST,
    })
    get('/api/v1/questions/' + id)
      .then(respond => respond.json())
      .then(topic => {
        dispatch({
          type: GET_TOPIC + SUCCESS,
          payload: topic
        })
      })
  }
}
