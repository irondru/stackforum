import { getJSON } from '../api';
import { GET_TOPIC, GET_TOPICS, REQUEST, SUCCESS, FAIL, API_TOPICS_PATH } from '../constants';

export const getTopic = (id) => dispatch => {
    dispatch({
      type: GET_TOPIC + REQUEST,
    })
    getJSON(API_TOPICS_PATH + id)
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

  export const getTopics = () => dispatch => {
    dispatch({
      type: GET_TOPICS + REQUEST,
    })
    getJSON(API_TOPICS_PATH)
      .then(topics => dispatch({
          type: GET_TOPICS + SUCCESS,
          payload: topics
        })
      )
  }
