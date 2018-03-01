// register an action creator to an ipc channel (key/channel, value/action creator)
import createIpc from 'redux-electron-ipc'
import { fileOpenSucces, fileCreateSucces } from './actions'

const ipc = createIpc({
  open: fileOpenSucces,
  new: fileCreateSucces,
})

export default ipc
