import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function WelcomeComponent() {
  // Get the username from URL
  const { username } = useParams();

  function callHelloWorldRestApi() {
    // How to call the rest apis in React: axios
    axios
      .get("http://localhost:8080/hello-world")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup")); // "then" means when rest API called successful, then do it
  }

  function successfulResponse(response) {
    console.log(response);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        {/* Use Link tag (Link to),it should be imported above */}
        {/* Link tag helps your app render components that need re-rendering based on a specified route rather than refreshing the whole page like anchor tag! */}
        Manage your todos. <Link to="/todos">Start here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
          Call hello world
        </button>
      </div>
    </div>
  );
}
