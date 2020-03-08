import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'
import {TodoItem as Component} from './todo-item'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(
    {onRemove: deleteTodo},
    dispatch
)

export const TodoItem = connect(mapStateToProps, mapDispatchToProps)(Component)
