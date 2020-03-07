const { ipcMain } = require('electron')
const {pong} = require('./backend/dist/build');

ipcMain.on('ping', (event, frontendData) => {
    console.log('main process recieved', {frontendData});
    const serverResponse = pong(frontendData)
    event.reply('pong', serverResponse);
});    
