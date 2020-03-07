import {some} from 'lodash'
import {equals} from 'utils'
import {setFilter} from 'modules/todos/actions'
import {FILTER_TYPES} from 'modules/todos/constants'

export const onFilterChange = value => dispatch => {
    const [prev, cur] = value || [];
    const newFilter = some(FILTER_TYPES, equals(cur)) ? cur : FILTER_TYPES.ALL;
    dispatch(setFilter(newFilter));
} 