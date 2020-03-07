const { ipcMain } = require('electron')
const {pong, getTodos} = require('./backend/dist/build');

ipcMain.on('ping', (event, frontendData) => {
    console.log('main process recieved', {frontendData});
    const serverResponse = pong(frontendData)
    event.reply('pong', serverResponse);
});    

ipcMain.on('getTodos', event => {
    const serverResponse = getTodos();
    console.log('getTodos request', {serverResponse});
    event.reply('getTodos-response', serverResponse);
})