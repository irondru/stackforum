import * as actions from './actions'
import * as statuses from './actionStatuses'
import reducer, { mountDefaultReducer, getStatus, getAction } from './reducer'

export {
  statuses,
  getStatus,
  getAction
}

export default {
  ...actions,
  getStatus,
  getAction,
  mountDefaultReducer,
  statuses,
  reducer
}
