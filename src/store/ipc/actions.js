export const FILE_OPEN_SUCCESS = 'FILE_OPEN_SUCCESS'
export const FILE_CREATE_SUCCESS = 'FILE_CREATE_SUCCESS'

export const fileOpenSucces = (file, data) => ({
  type: FILE_OPEN_SUCCESS,
  payload: data,
  meta: {
    file,
  },
})

export const fileCreateSucces = (filepath) => ({
  type: FILE_CREATE_SUCCESS,
  payload: filepath,
})
