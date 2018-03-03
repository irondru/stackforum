const initialState = {
  all: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      return {
        ...state,
        all: action.payload
      }
      break;
    default:
      return state
  }
}
