import {TodosDataLayer} from 'data-layer/todos'

export const requestTodos = () => (dispatch, getState) => {
    const todosDataLayer = TodosDataLayer(dispatch, getState);
    todosDataLayer.requestTodos()
}

export const updateTodo = todo => (dispatch, getState) => {
    const todosDataLayer = TodosDataLayer(dispatch, getState);
    todosDataLayer.updateTodo(todo)
}

export const createTodo = todo => (dispatch, getState) => {
    const todosDataLayer = TodosDataLayer(dispatch, getState);
    todosDataLayer.createTodo(todo)
}

export const deleteTodo = todo => (dispatch, getState) => {
    const todosDataLayer = TodosDataLayer(dispatch, getState);
    todosDataLayer.deleteTodo(todo)
}