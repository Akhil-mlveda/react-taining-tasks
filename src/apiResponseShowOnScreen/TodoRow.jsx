import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function TodoRow(props) {
  const todo = props.todo;
  const deleteState = props.deleteState;

  const onDeleteHandler = () => props.handleDelete(todo.id);
  return (
    <div className="d-flex justify-content-between p-1 ">
      <p>
        {todo.id}
        {")  "}
        {todo.title}
      </p>
      <Button 
        onClick={() => onDeleteHandler(todo.id)}
        variant={!deleteState ? "primary" : "secondary"}
        size="sm"
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoRow;
