import { useEffect, useState } from "react";
import {
  retrieveAllTodosForUsernameApi,
  deleteTodoApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const navigate = useNavigate();

  const authContext = useAuth();

  const username = authContext.username;

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    deleteTodoApi(username, id).then(
      () => {
        setMessage(`Delete of todo with id: ${id} successful!`);
        refreshTodos();
      }
      //1: Display message
      //2: Update Todos list
    );
  }

  function updateTodo(id) {
    console.log("click" + id);
    navigate(`/todo/${id}`);

    // updateTodoApi;
  }

  return (
    // Set class name to container for using bootstrap
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Status</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* Map each todo to JSX expression! */}
            {todos.map((todo) => (
              // Add a key property to every child of list, or there will be a warning: add id as a unique key
              <tr key={todo.id}>
                {/* <td>{todo.id}</td> */}
                <td>{todo.description}</td>

                {/* You can not use todo.done/target. It must be converted to string type. Don't forget the () after them! */}
                <td>{todo.done.toString()}</td>

                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {message && <div className="alert alert-warning">{message}</div>} */}
      </div>
    </div>
  );
}

export default ListTodosComponent;
