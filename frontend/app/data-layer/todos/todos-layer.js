import {setTodos} from 'modules/todos/actions';
const {ipcRenderer} = window.require('electron');

export class TodosLayer {
    constuctor({dispatch, getState}) {
        this.store = {
            dispatch, getState
        };

        this.registrateBackendEvents();
    }

    registrateBackendEvents() {
        const {dispatch} = this.store;

        ipcRenderer.on('getTodos-response', todos => {
            dispatch(setTodos(todos))
        });
        
    }

    // TODO: request with filterSettings, pagination, offset...
    requestTodos() {
        ipcRenderer.send('getTodos');
    }

    updateTodo(todo) {
        ipcRenderer.send('putTodo', {todo});
    }

    deleteTodo(todo) {
        ipcRenderer.send('deleteTodo', {todo})
    }

    createTodo(todo) {
        ipcRenderer.send('postTodo', {todo})
    }
}