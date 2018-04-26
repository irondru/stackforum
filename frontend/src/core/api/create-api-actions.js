import { PENDING, SUCCESS, ERROR, GET } from 'core/constants'
import fetch from 'isomorphic-fetch'

export default (api_path, method, actionType, body = {}) => dispatch => {
  dispatch({
    type: actionType + PENDING
  })

  const checkResponse = response =>
    new Promise((resolve, reject) => {
      if (response.ok) response.json().then(json => resolve(json))
      else if (response.status === 401 || response.status === 422)
        response.json().then(json => reject(json))
      else reject({ msg: 'Что то пошло не так...'})
    })

  let options = {
      method,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }
  if (method !== GET) options = {
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
      dispatch({
      type: actionType + ERROR,
      errors
    })
  })
}
