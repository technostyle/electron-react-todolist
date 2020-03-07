import React from "react";
import Button from "react-bootstrap/Button";

export const DoneButton = ({ onClick }) => (
    <Button variant="outline-success" size="sm" onClick={onClick}>
      done
    </Button>
  );

  export const UndoButton = ({ onClick }) => (
    <Button variant="outline-warning" size="sm" onClick={onClick}>
      undo
    </Button>
  );

  export const RemoveButton = ({ onClick }) => (
  <Button variant="outline-danger" size="sm" onClick={onClick}>
    remove
  </Button>
);
