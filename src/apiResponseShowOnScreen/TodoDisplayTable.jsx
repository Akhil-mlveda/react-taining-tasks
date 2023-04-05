import React, { useState } from "react";
import TodoRow from "./TodoRow";

function TodoDisplayTable(props) {
  const todoTitleArray = props.todoTitleArray;

  const [pageNo, setPageNo] = useState(1);

  const compactTitleArray = todoTitleArray.filter((curr, index) => {
    if (index < pageNo * 10 && index + 1 > (pageNo - 1) * 10) {
      return curr;
    }
  });
  const isDisabledP = () => {
    if (pageNo <= 1) {
      return true;
    }
    return false;
  };
  const isDisabledN = () => {
    if (pageNo > 20) {
      return true;
    }
    return false;
  };


  return (
    <div>
      {compactTitleArray.map((curr, index) => (
        <TodoRow todo={curr} handleDelete={props.handleDelete} key={index} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          padding: "1vw 0",
        }}
      >
        <button disabled={isDisabledP()} onClick={(e) => setPageNo(pageNo - 1)}>
          Prev
        </button>
        <button disabled={isDisabledN()} onClick={(e) => setPageNo(pageNo + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TodoDisplayTable;
