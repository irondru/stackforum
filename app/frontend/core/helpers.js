import apiReducer from './api/api-reducer'

export function parseForm (target) {
  let formData = {}
  Array.from(target).forEach(field => {
  if (field.type == 'file') {
    formData[field.name] = formData[field.name] || []
    formData[field.name].push({ id: field.id, file: field.value})
  } else {
    formData[field.name] = field.value
  }  })
  return formData
}

export const getApiReducer = actionType =>
  (state, action, _actionType = actionType) =>
    apiReducer(state, action, _actionType)

export const payloadPush = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})
