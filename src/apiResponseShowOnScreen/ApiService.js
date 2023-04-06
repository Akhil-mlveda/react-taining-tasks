import axios from "axios";

 const fetchTodos = async (props) => {
  const INITIAL_PAGE_NUMBER = props.INITIAL_PAGE_NUMBER;
  const LIMIT = props.LIMIT;
  const setTodoS = props.setTodoS;
  const setLoading = props.setLoading;
  const setError = props.setError;
  // const setPageChange = props.setPageChange;

  axios
    .get(`https://jsonplaceholder.typicode.com/todos`, {
      params: {
        _page: INITIAL_PAGE_NUMBER,
        _limit: LIMIT,
      },
    })
    .then((res) => {
      setTodoS(res.data);
      setLoading(false);
      setError(false);
      // setPageChange(false)
    })
    .catch((err) => {
      setLoading(false);
      setError("Data can't fetch");
      // setPageChange(false);
    });
};
export default fetchTodos;