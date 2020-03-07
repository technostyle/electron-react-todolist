import { FILTER_TYPES } from "./constants";

export const TODOS_ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  UPDATE_TODO: "UPDATE_TODO",
  SET_FILTER: "SET_FILTER"
};

const defaultTodos = [
  {
    id: 1,
    complete: false,
    text: '1'
  },
  {
    id: 2,
    complete: false,
    text: '2'
  },
  {
    id: 3,
    complete: true,
    text: '3'
  }
]

const defaultState = {
  todos: defaultTodos,
  filter: FILTER_TYPES.ALL
};

const setFilter = (state, payload) => {
  const [prev, cur] = payload;
  if (!prev) {
    return state
  }

  return {...state, filter: cur}
}

export const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case (TODOS_ACTIONS.SET_FILTER):
      return setFilter(state, payload);
    default:
      return state;
  }
};
