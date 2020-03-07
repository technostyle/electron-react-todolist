
import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DoneButton, UndoButton, RemoveButton } from "./buttons";

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
    this.onCompleteToggle = this.onCompleteToggle.bind(this);
  }

  onCompleteToggle(event) {
    event.preventDefault();
    this.props.onCompleteToggle(this.props.id);
  }

  onRemove(event) {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  }

  render() {
    const { id, text, complete } = this.props;

    return (
      <ListGroup.Item variant={complete ? "success" : "light"}>
        <Container>
          <Row>
            <Col md={6}>{text}</Col>
            <Col md={2}>
              {complete ? (
                <UndoButton onClick={this.onCompleteToggle} />
              ) : (
                <DoneButton onClick={this.onCompleteToggle} />
              )}
            </Col>
            <Col md={2}>
              <RemoveButton onClick={this.onRemove} />
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.any,
  text: PropTypes.string,
  complete: PropTypes.bool,
  onCompleteToggle: PropTypes.func,
  onRemove: PropTypes.func
};
