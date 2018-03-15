"use strict";
import apiReducer from './api/api-reducer'

export function parseForm (target) {
  let formData = {}
  Array.from(target).forEach(field => {
  if (field.type == 'file') {
    formData[field.name] = formData[field.name] || []
    let reader = new FileReader()
    reader.readAsDataURL(field.files[0])
    reader.onloadend = () =>
      formData[field.name].push({
        id: field.id,
        file: reader.result
      })
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
