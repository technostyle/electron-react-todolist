import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTodos, getActiveFilter} from 'modules/todos/selectors'
import {TodoList as Component} from './todo-list'

const mapStateToProps = state => ({
    todos: getTodos(state),
    activeFilter: getActiveFilter(state)
})

export const TodoList = connect(mapStateToProps)(Component)
