import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getTodos} from 'modules/todos/selectors'
import {TodoList as Component} from './todo-list'

// const mapStateToProps = state => ({
//     todos: 
//     console.log('mapStateToProps todo-list', state, getTodos(state)) 
//     || getTodos(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {},
//     dispatch
// );

const mapStateToProps = null;
const mapDispatchToProps = null;

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component)
