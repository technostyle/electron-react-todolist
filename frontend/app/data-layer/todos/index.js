import {memoize} from 'lodash'
import {TodosDataLayer as Singleton} from './todos-data-layer'

const TodosDataLayerFabric = (dispatch, getState) => new Singleton(dispatch, getState);
export const TodosDataLayer = memoize(TodosDataLayerFabric);
