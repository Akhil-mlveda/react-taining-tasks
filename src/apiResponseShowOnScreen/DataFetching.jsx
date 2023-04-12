import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import TodoRow from "./TodoRow";
import { fetchTodos, deleteTodo } from "./ApiServices";
import ErrorBoundary from "../advancedTopicsContext/ErrorBoundary";

const INITIAL_PAGE_NUMBER = 1;
const LIMIT = 10;

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [todoS, setTodoS] = useState([]);
  const [error, setError] = useState(false);
  const [pageNo, setPageNo] = useState(INITIAL_PAGE_NUMBER);
  const [pageChange, setPageChange] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  useEffect(() => {
    fetchTodos(INITIAL_PAGE_NUMBER, LIMIT)
      .then((res) => {
        setTodoS(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Data can't fetch");
      });
  }, []);

  const onPreviousBtnClick = () => {
    setPageNo(pageNo - 1);
    setPageChange(true);

    fetchTodos(pageNo - 1, LIMIT)
      .then((res) => {
        setTodoS(res.data);
        setPageChange(false);
        setError(false);
      })
      .catch((err) => {
        setPageChange(false);
        setError(true);
      });
  };

  const onNextBtnClick = () => {
    setPageNo(pageNo + 1);
    setPageChange(true);

    fetchTodos(pageNo + 1, LIMIT)
      .then((res) => {
        setTodoS(res.data);
        setPageChange(false);
        setError(false);
      })
      .catch((err) => {
        setPageChange(false);
        setError(true);
      });
  };
  // const setTodoSS =(id) => {
  //   (todoS.filter((todo) => todo.id !== id))
  // }
  const handleDelete = (id) => {
    setDeleteError(false);
    deleteTodo(id)
      .then(() => {
        setTodoS((todoS) => todoS.filter((todo) => todo.id !== id));
        setDeleteError(false);
      })
      .catch((err) => {
        setDeleteError("Data can't Delete try again");
        // throw new Error("can't delete");
      });
  };

  if (error) {
    throw new Error("can not fetching data from api");
  }

  // {/* <div>{alert(error)}</div> */}
  // const todoItems = todoS.map((currTodo, index) => (
  //     <TodoRow
  //       key={currTodo.id}
  //       todo={currTodo}
  //       // setTodoS={setTodoSS}
  //       onHandleDelete={handleDelete}
  //       deleteError={deleteError}
  //     ></TodoRow>
  // ));
  return (
    <div
      className="bg-secondary m-5vw p-4 text-white font-weight-bold text-center"
      style={{ borderRadius: "30px", height: "100vw", margin: "2rem" }}
    >
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : !error ? (
        <div>
          {/* <ErrorBoundary>{todoItems}</ErrorBoundary>
           */}

          {todoS.map((currTodo, index) => (
            <ErrorBoundary>
              <TodoRow
                key={currTodo.id}
                todo={currTodo}
                // setTodoS={setTodoSS}
                onHandleDelete={handleDelete}
                deleteError={deleteError}
              ></TodoRow>
            </ErrorBoundary>
          ))}

          <div className="d-flex justify-content-between">
            <button
              disabled={pageNo <= 1 || pageChange ? true : false}
              onClick={onPreviousBtnClick}
            >
              Prev
            </button>
            <button
              disabled={pageNo >= 20 || pageChange ? true : false}
              onClick={onNextBtnClick}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>can't fetching data</h1>
        </div>
      )}
    </div>
  );
}

export default DataFetching;
