import { getApiReducer } from 'core'
import { QUESTIONS, INDEX } from 'core/constants'

export default getApiReducer(QUESTIONS + INDEX)
