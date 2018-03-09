import { PENDING, SUCCESS, ERROR, GET } from '../constants'
import _ from 'underscore';
import fetch from 'isomorphic-fetch'

const getCSRFToken = () =>
  _.find(document.getElementsByTagName('meta'), meta => meta.name === 'csrf-token').content

const checkResponse = response => new Promise((resolve, reject) => {
  if (response.status === 200) response.json().then(json => resolve(json))
   else response.json().then(json => reject(json))
})

export default (api_path, method, actionType, body = {}) => dispatch => {
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
    body: JSON.stringify(body)
  }
  fetch(api_path, options)
    .then(response => checkResponse(response)
      .then(payload => dispatch({
        type: actionType + SUCCESS,
        payload
      }))
    )
    .catch(errors => {
      console.log(errors)
      dispatch({
      type: actionType + ERROR,
      errors
    })
  })
}
