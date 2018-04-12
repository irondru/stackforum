import actions from './actions'
import * as statuses from './actionStatuses'
import * as methods from './methods'
import reducer, { mountDefaultReducer, getStatus, getAction } from './reducer'

export {
  methods,
  statuses,
  getStatus,
  getAction
}

export default {
  actions,
  getStatus,
  getAction,
  methods,
  mountDefaultReducer,
  statuses,
  reducer
}
