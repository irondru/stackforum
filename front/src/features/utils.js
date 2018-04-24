export const base64Loader = files => new Promise((resolve, reject) => {
  var result = []
  var pending = 0
  files.forEach(file => {
    let reader = new FileReader()
    ++pending
    reader.readAsDataURL(file)
    reader.onload = () => {
      result.push({ file: reader.result })
      --pending
      if (!pending) resolve(result)
    }
    reader.onerror = () => reject()
  })
  if (!pending) resolve()
})

export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})
