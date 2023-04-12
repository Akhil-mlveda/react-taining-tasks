import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { fetchTodos, deleteTodo } from "./ApiServices";
import ErrorBoundary from "../advancedTopicsContext/ErrorBoundary";
import BuggyCounter from "../advancedTopicsContext/BuggyCounter";

function TodoRow(props) {
  const todo = props.todo;
  const deleteError = props.deleteError;

  // const [deleteError, setDeleteError] = useState(false);

  // const handleDelete = (id) => {
  //   setDeleteError(false);
  //   deleteTodo(id)
  //     .then(() => {
  //       props.setTodoS(id);
  //       setDeleteError(false);
  //     })
  //     .catch((err) => {
  //       setDeleteError("Data can't Delete try again");
  //     });
  // };

  const [deleteState, setDeleteState] = useState(false);

  const onDeleteHandler = (event) => {
    setDeleteState(true);
    props.onHandleDelete(todo.id); 

  };

  const Style = {
    backgroundColor: deleteState ? "red" : "",
  };

  if (deleteState) {
    throw new Error("can not delete");
  }
  // <div className="d-flex justify-content-between p-1 "> 

  return (
    <div className="d-flex justify-content-between p-1 " style={!deleteError ? Style : undefined}>
      <p>
        {todo.id}
        {")  "}
        {todo.title}
      </p> 
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
