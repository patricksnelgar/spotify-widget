const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win

function createWindow(){
    var width = 500; var height = 230;
    win = new BrowserWindow({width: width, height: height, show: false, frame: true, backgroundColor: '#666666'});
    win.loadURL(url.format({pathname: path.join(__dirname,"index.html"),
                            protocol: 'file:',
                            slashes: true}));
    win.once('ready-to-show', () => {
        win.show();
    });
}

app.on('ready', createWindow);

app.on('activate', () => {
    if(win === null)
        createWindow();
});

var file = 'index.html';

console.log('PATH: ', path.join(__dirname, file));
