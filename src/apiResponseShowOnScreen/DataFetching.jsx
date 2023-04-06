/* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DataFetching() {
//   // const [posts, setPosts] = useState([ ]);
//   const [post, setPost] = useState({});
//   const [id, setId] = useState(1);
//   const [idFromButtonClick, setIdFromButtonClick] = useState(1)

//   const handleClick = () => {
//     setIdFromButtonClick(id);
//   }
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })

//     // return () => {
//     //   second;
//     // };
//   }, [idFromButtonClick]);

//   return (
//     <div>
//     <input type="text" value={id} onChange={e => setId(e.target.value)} />
//     <button type="button" onClick={handleClick}>Fetch Post</button>
//     <div>{post.title}</div>
//       {/* <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default DataFetching;

// import React,{useState, useEffect} from 'react'
// import axios from 'axios'
// import LoadingImg from './Spinner.gif'

// function DataFetching() {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([]);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => {
//         setTodos(res.data);
//         setLoading(false);
//         setError(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError(true);
//       })

//   }, [])

//   return (
//     <div>
//     {loading && <img src={LoadingImg} alt='Loading Image' style={{width:'60%', height:'60%', }}/>}

//     </div>
//   )
// }

// export default DataFetching

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import TodoRow from "./TodoRow";
import fetchTodos from "./ApiService";

const INITIAL_PAGE_NUMBER = 1;
const LIMIT = 10;

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [todoS, setTodoS] = useState([]);
  const [error, setError] = useState(false);
  const [pageNo, setPageNo] = useState(INITIAL_PAGE_NUMBER);
  const [pageChange, setPageChange] = useState(false);

  useEffect(() => {
      fetchTodos({
        INITIAL_PAGE_NUMBER:INITIAL_PAGE_NUMBER,
        LIMIT:LIMIT,
        setTodoS:setTodoS,
        setLoading:setLoading,
        setError:setError,
      });
      
  }, []);

  const onPreviousBtnClick = () => {
    setPageNo(pageNo - 1);
    setPageChange(true);

    // fetchTodos({
    //   INITIAL_PAGE_NUMBER:pageNo-1,
    //   LIMIT:LIMIT,
    //   setTodoS:setTodoS, 
    //   setError:setError,
    //   setPageChange:setPageChange,
    // });
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`, {
        params: {
          _page: pageNo - 1,
          _limit: 10,
        },
      })
      .then((res) => {
        setTodoS(res.data);
        setPageChange(false);
        setError(false);
      })
      .catch((err) => {
        setPageChange(false);
        setError(true);
      });
    // }
  };

  const onNextBtnClick = () => {
    setPageNo(pageNo + 1);
    setPageChange(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`, {
        params: {
          _page: pageNo + 1,
          _limit: 10,
        },
      })
      .then((res) => {
        setTodoS(res.data);
        setPageChange(false);
        setError(false);
      })
      .catch((err) => {
        setPageChange(false);
        setError(true);
      });
    // }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTodoS(todoS.filter((todo) => todo.id !== id));
        setError(false);
      })
      .catch((err) => {
        setError("Data can't Delete try again");
      });
  };

  return (
    <div
      className="bg-secondary m-5vw p-4 text-white font-weight-bold text-center"
      style={{ borderRadius: "30px", height: "100vw", margin: "2rem" }}
    >
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : error ? (
        <div>{alert(error)}</div>
      ) : (
        <div>
          {todoS.map((currTodo, index) => (
            <TodoRow
              key={currTodo.id}
              todo={currTodo}
              handleDelete={handleDelete}
            />
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
      )}
    </div>
  );
}

export default DataFetching;
