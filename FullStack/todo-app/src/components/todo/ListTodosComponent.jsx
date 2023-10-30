// Create todo list!
export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 2,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    {
      id: 1,
      description: "learn React",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 2,
      description: "learn AWS",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 3,
      description: "learn Java Spring",
      done: false,
      targetDate: targetDate,
    },
  ];
  return (
    // Set class name to container for using bootstrap
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Status</td>
              <td>Target Date</td>
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

                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
