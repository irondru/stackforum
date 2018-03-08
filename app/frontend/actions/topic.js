import { getJSON, post, patch } from '../api';
import { GET_TOPIC, QUERY_QUESTION, GET_TOPICS, PENDING, SUCCESS, ERROR,
  API_TOPICS_PATH, EDIT_QUESTION } from '../constants';

export const getTopic = (id, actionType) => dispatch => {
    dispatch({
      type: actionType + PENDING,
    })
    getJSON(API_TOPICS_PATH + id)
      .then(topic => {
        dispatch({
          type: actionType + SUCCESS,
          payload: topic
        })
      })
      .catch(error => {
        dispatch({
          type: actionType + ERROR,
          error: error
        })
      }
      )
  }

  export const getTopics = () => dispatch => {
    dispatch({
      type: GET_TOPICS + PENDING,
    })
    getJSON(API_TOPICS_PATH)
      .then(topics => dispatch({
          type: GET_TOPICS + SUCCESS,
          payload: { topics }
        })
      )
  }

  export const postQuestion = (question, edit) => dispatch => {
    dispatch({
      type: QUERY_QUESTION + PENDING
    })

    const query = edit ?
      patch(API_TOPICS_PATH, { question }) :
      post(API_TOPICS_PATH, { question })

    query.then(response => {
        switch (response.status) {
          case 200:
            response.json().then(id => {
              dispatch({
                type: QUERY_QUESTION + SUCCESS,
                payload: { id }
              })
            })
            break
          case 422:
            response.json().then(msg => {
              dispatch({
                type: QUERY_QUESTION + ERROR,
                payload: msg
              })
            })
            break
          default:
            dispatch({
              type: QUERY_QUESTION + ERROR,
              payload: { msg: "error"}
            })
        }
      })
  }
