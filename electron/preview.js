// In the main process.
const electron = require('electron');
const { app, BrowserWindow, globalShorcut } = electron;

// Or use `remote` from the renderer process.
// const { BrowserWindow } = require('electron').remote

const win = new BrowserWindow({ width: 800, height: 600 });

// Load a remote URL
win.loadURL('https://github.com');

// Or load a local HTML file
win.loadURL(`file://${__dirname}/app/index.html`);