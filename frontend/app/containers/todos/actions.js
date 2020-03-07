import {setTodos} from 'modules/todos/actions'
const {ipcRenderer} = window.require('electron');

export const requestTodos = () => dispatch => {
    ipcRenderer.on('getTodos-response', (event, todos) => {
        dispatch(setTodos(todos))
    })
    ipcRenderer.send('getTodos');
}