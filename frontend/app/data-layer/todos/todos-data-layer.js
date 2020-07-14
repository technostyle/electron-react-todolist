import {setTodos} from 'modules/todos/actions'
const {ipcRenderer} = window.require('electron');

export class TodosDataLayer {
    constructor(dispatch, getState) {
        this.store = {dispatch, getState};
        this.registrateEvents = this.registrateEvents.bind(this);
        this.registrateEvents()
    }

    registrateEvents() {
        const {dispatch} = this.store;
        ipcRenderer.on('getTodos-response', (event, todos) => {
            dispatch(setTodos(todos))
        })    
    }

    requestTodos() {
        ipcRenderer.send('getTodos');
    }

    // Todo: sync
    createTodo(todo) {
        ipcRenderer.send('postTodo', todo);
    }

    // Todo: sync
    updateTodo(todo) {
        ipcRenderer.send('putTodo', todo);
    }

    deleteTodo(id) {
        ipcRenderer.send('deleteTodo', id);
    }

    toggleComplete(id) {
        ipcRenderer.toggleComplete('deleteTodo', id);
    }

    getTodo(todo) {
        const {id} = todo;
        ipcRenderer.sendSync('getTodo', id);
    }
}