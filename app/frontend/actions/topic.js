import { getJSON, post } from '../api';
import { GET_TOPIC, QUERY_QUESTION, GET_TOPICS, REQUEST, SUCCESS, FAIL, API_TOPICS_PATH } from '../constants';

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

  export const postQuestion = question => dispatch => {
    dispatch({
      type: QUERY_QUESTION + REQUEST
    })

    post(API_TOPICS_PATH, { question })
      .then(responce => {
        switch (responce.status) {
          case 200:
            responce.json().then(id => {
              dispatch({
                type: QUERY_QUESTION + SUCCESS,
                payload: id
              })
            })
            break
          case 204:
            responce.json().then(msg => {
              dispatch({
                type: QUERY_QUESTION + FAIL,
                payload: msg
              })
            })
            break
          default:
            dispatch({
              type: QUERY_QUESTION + FAIL,
              payload: { msg: "error"}
            })
        }
      })
  }
