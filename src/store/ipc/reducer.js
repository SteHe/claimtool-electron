import { initialState } from './selectors'
import { FILE_OPEN_SUCCESS, FILE_CREATE_SUCCESS } from './actions'

export default (state = initialState, { type, payload }) => {
  if (type === FILE_OPEN_SUCCESS) {
// eslint-disable-next-line prefer-destructuring
    const dossier = JSON.parse(payload).dossier
    return ({ ...dossier })
  } else if (type === FILE_CREATE_SUCCESS) {
    return state
  }
  return state
}
