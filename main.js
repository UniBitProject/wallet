'use strict'

const electron = require('electron')
const app = electron.app
const globalShortcut = electron.globalShortcut
const os = require('os')
const path = require('path')
const config = require(path.join(__dirname, 'package.json'))
const BrowserWindow = electron.BrowserWindow
const globalConfig = require(path.join(__dirname, 'config.json'))

app.setName(config.productName)

var fs = require('fs');



let multichain = require("multichain-node")({
    port: globalConfig.connection.port,
    host: globalConfig.connection.host,
    user: globalConfig.connection.user,
    pass: globalConfig.connection.pass,
});

multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }
    JSON.stringify(info);
    console.log(info);
    global.x = (info);
});

var mainWindow = null
app.on('ready', function () {
  mainWindow = new BrowserWindow({
    title: config.productName,
backgroundColor: '#333333',
    webPreferences: {
      nodeIntegration: true,
      defaultEncoding: 'UTF-8'
    }
  })

  mainWindow.loadURL(`file://${__dirname}/app/new-index.html`)
  var introJS = require('intro.js').introJs

  // Enable keyboard shortcuts for Developer Tools on various platforms.
  let platform = os.platform()
  if (platform === 'darwin') {
    globalShortcut.register('Command+Option+I', () => {
      mainWindow.webContents.openDevTools()
    })
  } else if (platform === 'linux' || platform === 'win32') {
    globalShortcut.register('Control+Shift+I', () => {
      mainWindow.webContents.openDevTools()
    })
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.setMenu(null)
    mainWindow.show()
  })

  mainWindow.onbeforeunload = (e) => {
    // Prevent Command-R from unloading the window contents.
    e.returnValue = false
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', () => { app.quit() })
