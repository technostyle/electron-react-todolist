import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getTodos, getActiveFilter} from 'modules/todos/selectors'
import {setFilter} from 'modules/todos/actions'
import {Todos as Component} from './todos';

const mapStateToProps = state => ({
    todos: getTodos(state),
    activeFilter: getActiveFilter(state)
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setActiveFilter: setFilter
    },
    dispatch
)
export const Todos = connect(mapStateToProps, mapDispatchToProps)(Component)

