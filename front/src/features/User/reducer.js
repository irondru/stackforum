import feedback, { statuses } from 'feedback'
import { USER } from './actionTypes'

/*import { pushInPayload } from 'features/utils'

export default (state, action) => {
  if (action.type === USER + statuses.SUCCESS) {
     console.log(action);
     return {
       ...action.payload,
       avatar_thumb: '/avatar.jpeg'
     }
  }
  else return feedback.reducer(
    state,
    action,
    USER
  )
}*/

export default feedback.mountDefaultReducer(USER)
