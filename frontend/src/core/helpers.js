import apiReducer from './api/api-reducer'

export function parseForm (target) {
  let formData = {}
  Array.from(target).forEach(field => {
    formData[field.name] = field.value
  })
  return formData
}

export function parseForm_ (target) {
  let result = {}
  Array.from(target).forEach(field => {
  if (field.type == 'file') {
    result[field.name] = result[field.name] || []
    let reader = new FileReader()
    reader.readAsDataURL(field.files[0])
    let fmData = new FormData()
    fmData.append('filetyu', field.files[0])
    
    console.log(fmData);
      result[field.name].push(fmData)
  } else {
    result[field.name] = field.value
  }  })
  return result
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
