import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getActiveFilter} from 'modules/todos/selectors'
import {onFilterChange} from './actions'
import {FilterBar as Component} from './filter-bar'


const mapStateToProps = state => ({
    activeFilter: getActiveFilter(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onFilterChange
}, dispatch)

export const FilterBar = connect(mapStateToProps, mapDispatchToProps)(Component)