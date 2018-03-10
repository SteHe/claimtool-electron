import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

const {
  app, BrowserWindow, Menu, dialog,
} = require('electron')
const fs = require('fs')
const path = require('path')
const isDev = require('electron-is-dev')

// const parseString = require('xml2js').parseString
const parser = require('xml2json-light')

let mainWindow
let currentFile
let filepath = ""

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 })

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  /*
  // macOS only
  app.setAboutPanelOptions({
    applicationName: "fdiff-electron",
    applicationVersion: "0.0.1"
  });
  */
  MenuFunc(mainWindow)
  mainWindow.on('closed', () => mainWindow = null)
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

const MenuFunc = function () {
  const menu = Menu.buildFromTemplate([
    {
      label: 'Dossier',
      submenu: [
        {
          label: 'new',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow.webContents.send('new', 'some new dossier')
            console.log('new dossier')
          },
        },
        {
          label: 'open',
          accelerator: 'CmdOrCtrl+O',
          click: () => {
            console.log('open dossier')
            dialog.showOpenDialog((fileNames) => {
              // fileNames is an array that contains all the selected
              if (fileNames === undefined) {
                console.log('No file selected')
                return
              }
              filepath = fileNames[0]
              fs.readFile(filepath, 'utf-8', (err, data) => {
                if (err) {
                  alert(`An error ocurred reading the file :${err.message}`)
                  return
                }
                const json = parser.xml2json(data)
                // TODO: assure that json is correct:
                // single elements in a list are converted to objects not arrays of length 1
                mainWindow.webContents.send('open', JSON.stringify(json))
              })
            })
          },
        },
        {
          label: 'save',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            mainWindow.webContents.send('save', `save dossier${filepath}`)
            console.log('save dossier')
          },
        },
        {
          label: 'restore',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.webContents.send('restore', 'restore some dossier')
            console.log('restore dossier')
          },
        },
        {
          role: 'quit',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Dossier',
          accelerator: 'Alt+R',
          click() {
            console.log('edit dossier')
          },
        },
        {
          label: 'Claims',
          accelerator: 'Alt+M',
          click(item, focusedWindow) {
            console.log('edit claims')
          },
        },
        {
          label: 'Documents',
          accelerator: 'Alt+D',
          click(item, focusedWindow) {
            console.log('edit documents')
          },
        },
        {
          label: 'Features',
          accelerator: 'Alt+F',
          click(item, focusedWindow) {
            console.log('edit features')
          },
        },
        {
          label: 'Strategy',
          accelerator: 'Alt+S',
          click() {
            console.log('edit strategy')
          },
        },
      ],
    },
    {
      label: 'Tasks',
      submenu: [
        {
          label: 'Grant',
          accelerator: 'AltGr+G',
          click: () => (console.log('tasks for a grant')),
        },
      ],
    },
    {
      label: 'Communications',
      submenu: [
        {
          label: 'SR',
          accelerator: 'Ctrl+Alt+S',
          click: () => (console.log('create search report')),
        },
      ],
    },
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Grant',
          accelerator: 'AltGr+G',
          click: () => (console.log('tasks for a grant')),
        },
      ],
    },
    {
      label: 'Mattress',
      submenu: [
        {
          label: 'Actions',
          accelerator: 'AltGr+A',
          click: () => (console.log('add actions')),
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
  ])
  Menu.setApplicationMenu(menu)
}
