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
import LoadingScreen from "./LoadingScreen";
import TodoDisplayTable from "./TodoDisplayTable";

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [todoS, setTodoS] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        setTodoS(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTodoS(todoS.filter((todo) => todo.id !== id));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div style={{background:"silver", margin:"5vw 20vw", padding:"4vw", color:"white", fontWeight:"800", letterSpacing:"2px", borderRadius:"30px"}}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <TodoDisplayTable loading={loading} setLoading={setLoading} todoTitleArray={todoS} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default DataFetching;
