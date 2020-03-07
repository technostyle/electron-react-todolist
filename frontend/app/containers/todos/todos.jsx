import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input } from "components/input";
import { TodoList } from "./todo-list";
import { FilterBar } from "./filter-bar";

export const Todos = ({
  setTodos,
  addTodo,
  toggleComplete,
  removeTodo,
  todos,
  activeFilter
}) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <h3>Daily Todos</h3>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <FilterBar />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Input onEnter={addTodo} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={8}>
        <TodoList
          activeFilter={activeFilter}
          setTodos={setTodos}
          todos={todos}
          onRemoveTodo={removeTodo}
          onCompleteTodoToggle={toggleComplete}
        />
      </Col>
    </Row>
  </Container>
);
