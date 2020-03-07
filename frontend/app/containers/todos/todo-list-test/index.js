import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTodos} from 'modules/todos/selectors'
import {TodoList as Component} from './todo-list'

const mapStateToProps = state => ({
    todos: getTodos(state)
})

export const TodoList = connect(mapStateToProps)(Component)
