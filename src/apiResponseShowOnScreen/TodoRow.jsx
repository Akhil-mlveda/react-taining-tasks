import React from "react";

function TodoRow(props) {
  const todo = props.todo;
  
  const onDeleteHandler = () => props.handleDelete(todo.id);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:"0.5vw"}}>
      <p>
        {todo.id}{")  "}
        {todo.title}
      </p>
      <button   onClick={onDeleteHandler}>Delete</button>
    </div>
  );
}

export default TodoRow;
