import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./todo-item";

export const TodoList = ({
    todos,
    onCompleteTodoToggle,
    onRemoveTodo,
    activeFilter
}) => (
    <ListGroup>
    {todos.length
      ? todos
        //   .filter(filterTodoCreator(activeFilter))
        //   .sort(sortTodoCreator(activeFilter))
          .map(({ id, text, complete }) => (
            <TodoItem
              key={id}
              id={id}
              text={text}
              complete={complete}
              onCompleteToggle={onCompleteTodoToggle}
              onRemove={onRemoveTodo}
            />
          ))
      : null}
  </ListGroup>
)
