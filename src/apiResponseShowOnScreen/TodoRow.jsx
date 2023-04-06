import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function TodoRow(props) {
  const todo = props.todo;

  const [deleteState, setDeleteState] = useState(false);

  // useEffect(() => {
  //   setDeleteState(false);
  
  // }, [todo])
  

  const onDeleteHandler = (id) => {
    setDeleteState(true);
    props.handleDelete(id);
  };

  const Style={
    backgroundColor: deleteState ? 'red' : '',
  }

  return (
    <div className="d-flex justify-content-between p-1 " style={Style}>
      <p>
        {todo.id}
        {")  "}
        {todo.title}
      </p>
      <Button
        onClick={() => onDeleteHandler(todo.id)}
        // variant={!deleteState ? "primary" : "secondary"}
        // size="sm"
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoRow;
