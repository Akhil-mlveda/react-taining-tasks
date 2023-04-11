import axios from "axios";

export const fetchTodos = async (pageNo, limit = 10) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`, {
    params: {
      _page: pageNo,
      _limit: limit,
    },
  });
};

export const deleteTodo = async (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.cm/todos/${id}`);
};
