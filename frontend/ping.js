const {ipcRenderer} = window.require('electron');

const root = document.getElementById('root')
const button = document.createElement('button');
button.innerText = 'ping backend';
root.appendChild(button);


ipcRenderer.on('pong', (event, response) => {
    console.log('ipcRenderer server pong', {event, response})
    const backendResponseDiv = document.createElement('div')
    backendResponseDiv.innerText = response.toString();
    root.appendChild(backendResponseDiv);
})

const pingServer = () => {
    ipcRenderer.send('ping', 'Fuck you');
}

button.addEventListener('click', pingServer);
