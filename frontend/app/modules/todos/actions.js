import {TODOS_ACTIONS} from './reducer'

export const setTodos = todos => ({
    type: TODOS_ACTIONS.SET_TODOS,
    payload: todos
})

export const setFilter = filter => ({
    type: TODOS_ACTIONS.SET_FILTER,
    payload: filter
})