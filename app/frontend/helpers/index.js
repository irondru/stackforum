export function parseForm (target) {
  let formData = {}
  Array.from(target).forEach(field => formData[field.name] = field.value)
  return formData
}
