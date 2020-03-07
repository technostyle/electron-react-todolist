import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { todosReducer } from "modules/todos/reducer";

let initialState = {};

const reducer = combineReducers({
  todos: todosReducer
});

export const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk));
