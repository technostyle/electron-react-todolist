import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getTodos, getActiveFilter} from 'modules/todos/selectors'
import {Todos as Component} from './todos';

const mapStateToProps = state => ({
    todos: getTodos(state),
    activeFilter: getActiveFilter(state)
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {},
    dispatch
)
export const Todos = connect(mapStateToProps, mapDispatchToProps)(Component)

