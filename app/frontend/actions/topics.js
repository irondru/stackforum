import { getJSON } from '../api';
import { GET_TOPICS, GET_TOPIC, REQUEST, SUCCESS, FAIL, API_TOPICS_PATH } from '../constants';

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
