import * as actions from './';
import { getJSON } from '../api';
import { GET_TOPICS, GET_TOPIC, REQUEST, SUCCESS, FAIL } from '../constants';

export const fetchTopics = () => dispatch =>
  getJSON('/api/v1/questions')
    .then(topics => dispatch({
          type: GET_TOPICS,
          payload: topics
         })
    )

export const fetchTopic = (id) => dispatch => {
    dispatch({
      type: GET_TOPIC + REQUEST,
    })
    getJSON('/api/v1/questions/' + id)
      .then(topic => {
        dispatch({
          type: GET_TOPIC + SUCCESS,
          payload: topic
        })
      })
      .catch(error => {
        dispatch({
          type: GET_TOPIC + FAIL,
          error: error
        })
      }

      )
  }
