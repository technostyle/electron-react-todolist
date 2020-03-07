const { ipcMain } = require('electron')
const {getTodos} = require('./backend/dist/build');

ipcMain.on('getTodos', event => {
    const serverResponse = getTodos();
    console.log('getTodos request', {serverResponse});
    event.reply('getTodos-response', serverResponse);
})