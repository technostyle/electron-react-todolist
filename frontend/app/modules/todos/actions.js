import {TODOS_ACTIONS} from './reducer'

export const setFilter = filter => ({
    type: TODOS_ACTIONS.SET_FILTER,
    payload: filter
})