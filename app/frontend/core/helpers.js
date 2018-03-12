import apiReducer from './api/api-reducer'

export function parseForm (target) {
  let formData = {}
  Array.from(target).forEach(field => formData[field.name] = field.value)
  return formData
}

export const getApiReducer = actionType =>
  (state, action, _actionType = actionType) =>
    apiReducer(state, action, _actionType)
