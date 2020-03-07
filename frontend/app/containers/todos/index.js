import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getTodos, getActiveFilter} from 'modules/todos/selectors'
import {requestTodos} from './actions'
import {Todos as Component} from './todos';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators(
    {requestTodos},
    dispatch
)
export const Todos = connect(mapStateToProps, mapDispatchToProps)(Component)

