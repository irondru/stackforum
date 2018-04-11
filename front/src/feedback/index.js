import actions from './actions'
import * as statuses from './actionStatuses'
import * as methods from './methods'
import reducer, { mountDefaultReducer } from './reducer'

export { methods, statuses }
export default { actions, methods, mountDefaultReducer, statuses, reducer }
