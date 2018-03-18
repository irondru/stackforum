import apiReducer from './api/api-reducer'

export function parseForm__ (target) {
  let result = new FormData()
  Array.from(target).forEach(field => {
  if (field.type == 'file') {
    result.append([field.name], field.files[0])
  } else {
    result.append(result[field.name], field.value)
  }  })
  return result
}

export const formToJSON = (target) => new Promise((resolve, reject) => {
  var result = {}
  var pending = 0
  Array.from(target).forEach(field => {
    if (field.value == '') return
    if (field.type == 'file') {
      result[field.name] = result[field.name] || []
      let reader = new FileReader()
      reader.readAsDataURL(field.files[0])
      ++pending
      reader.onload = () => {
        result[field.name].push({ file: reader.result })
        --pending
        if (!pending) resolve(result)
      }
      reader.onerror = () => reject
    } else result[field.name] = field.value
  })
  if (!pending) resolve(result)
})

export const getApiReducer = actionType =>
  (state, action, _actionType = actionType) =>
    apiReducer(state, action, _actionType)

export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})
