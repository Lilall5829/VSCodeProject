import { useEffect, useState } from "react";
import {
  retrieveAllTodosForUsernameApi,
  deleteTodoApi,
} from "./api/TodoApiService";
// Create todo list!
function ListTodosComponent() {
  const [todos, setTodos] = useState([]); // Don't forget the [] inside (), or there will be an error!
  const [message, setMessage] = useState(null);
  useEffect(() => refreshTodos(), []);
  function refreshTodos() {
    retrieveAllTodosForUsernameApi("in28minutes");
  }

  function deleteTodo(id) {
    console.log("clicked " + id);
    deleteTodoApi("lila", id)
      .then(
        () => {
          setMessage(`Delete of todo with id = ${id} successful`);
          refreshTodos();
        }
        //1: Display message
        //2: Update Todos list
      )
      .catch((error) => console.log(error));
  }

  return (
    // Set class name to container for using bootstrap
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Status</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Map each todo to JSX expression! */}
            {todos.map((todo) => (
              // Add a key property to every child of list, or there will be a warning: add id as a unique key
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>

                {/* You can not use todo.done/target. It must be converted to string type. Don't forget the () after them! */}
                <td>{todo.done.toString()}</td>

                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button className="btn btn-warning" onClick={deleteTodo}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && <div className="alert alert-warning">{message}</div>}
      </div>
    </div>
  );
}
export default ListTodosComponent;
