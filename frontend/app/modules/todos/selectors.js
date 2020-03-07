import {prop} from 'utils'
import {createSelector} from 'reselect'

const getTodosDomain = prop('todos')

export const getTodos = createSelector(getTodosDomain, prop('todos'));
export const getActiveFilter = createSelector(getTodosDomain, prop('filter'));
