// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

async function createWindow () {
  // Create the browser window.
  // Primeiro criar tela do tamanho da tela atual
  mainWindow = new BrowserWindow({width: 3240, height: 3840, x: 0, y: 0, enableLargerThanScreen: true , resizable: false, frame: false})
  // Linha abaixo habilita dev tools inspector 
  // mainWindow.webContents.openDevTools()
  mainWindow.setMenu(null)
  // apontar para html da aplicação
  mainWindow.loadFile('./build/index.html')
  // modo fullscreen
  mainWindow.setFullScreen(false)
  // Se a tela precisar ser maior que o tamnho da tela principal, precisa ser setado aqui
  // mainWindow.setSize(1920 + 1024, 1080)
  // mainWindow.loadURL('http://localhost:3001')
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// habilita eventos de touch
app.commandLine.appendSwitch('--enable-touch-events')
