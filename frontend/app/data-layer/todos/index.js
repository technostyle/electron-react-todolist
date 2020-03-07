import {memoize} from 'lodash'
import {TodosLayer} from './todos-layer'

export const TodosDataLayer = memoize(store => new TodosLayer(store));
