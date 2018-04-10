import apiReducer from 'feedback/reducer'

export const formToJSON = (target) => new Promise((resolve, reject) => {
  var result = {}
  var pending = 0
  Array.from(target).forEach(field => {
    if (field.value === '') return
    if (field.type === 'file') {
      let reader = new FileReader()
      ++pending
      reader.readAsDataURL(field.files[0])
      reader.onload = () => {
        result[field.name] = result[field.name] || []
        result[field.name].push({ file: reader.result })
        --pending
        if (!pending) resolve(result)
      }
      reader.onerror = () => reject
    } else result[field.name] = field.value
  })
  if (!pending) resolve(result)
})

export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})
