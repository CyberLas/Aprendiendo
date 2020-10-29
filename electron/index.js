const electron = require('electron').remote;
const { app, BrowserWindow, globalShorcut } = electron;

let windows;

app.on('ready', () => {
    windows = new BrowserWindow({
        width: 1000,
        height: 680,
        minWidth: 1000,
        minHeight: 680,
        titleBarStyle: 'hidden',
    });

    windows.setTitle('Whatsapp');
    windows.loadURL('https://github.com/');
    
    windows.on('closed', () => {
        windows = null;
    });
});