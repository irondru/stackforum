export const editAnswer = id => dispatch =>
  dispatch({
    type: ANSWER_REQUEST + INITIAL_EDIT + SUCCESS,
    id
  })

export const cancelEditAnswer = id => dispatch =>
  dispatch({
    type: ANSWER_REQUEST + CANCEL_EDIT + SUCCESS,
    id
  })  
