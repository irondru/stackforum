import { PENDING, SUCCESS, ERROR, GET } from '../constants'
import _ from 'underscore';
import fetch from 'isomorphic-fetch'

const getCSRFToken = () =>
  _.find(document.getElementsByTagName('meta'), meta => meta.name === 'csrf-token').content

const checkResponse = response => new Promise((resolve, reject) => {
  if (response.status === 200) response.json().then(json => resolve(json))
   else response.json().then(json => reject(json))
})

const createApiActions = (api_path, method, actionType, data = {}) => dispatch => {
  dispatch({
    type: actionType + PENDING,
  })
  let options = {
      method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCSRFToken(),
      }
  }
  if (method != GET) options = {
    ...options,
    body: JSON.stringify(data)
  }
  fetch(api_path, options)
    .then(response => checkResponse(response)
      .then(payload => dispatch({
        type: actionType + SUCCESS,
        payload
      }))
    )
    .catch(errors => dispatch({
      type: actionType + ERROR,
      errors
    }))
}

export default createApiActions
