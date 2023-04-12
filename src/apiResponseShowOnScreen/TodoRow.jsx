import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ErrorBoundary from "../advancedTopicsContext/ErrorBoundary";
import BuggyCounter from "../advancedTopicsContext/BuggyCounter";

function TodoRow(props) {
  const todo = props.todo;
  const deleteError = props.deleteError;

  const [deleteState, setDeleteState] = useState(false);

  const onDeleteHandler = (event) => {
    setDeleteState(true);
    props.handleDelete(todo.id);
  };

  const Style = {
    backgroundColor: deleteState ? "red" : "",
  };

  return (
    // <div className="d-flex justify-content-between p-1 " style={!deleteError ? Style : " "}>
    <div className="d-flex justify-content-between p-1 ">
      <p>
        {todo.id}
        {")  "}
        {todo.title}
      </p>
      <h6>
        {!deleteState ? (
          "want to delete?"
        ) : (
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        )}
      </h6>
      <Button
        variant={!deleteState ? "primary" : "secondary"}
        onClick={onDeleteHandler}
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoRow;
