import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldBean } from "./api/HelloWorldApiService";
export default function WelcomeComponent() {
  // Get the username from URL
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    // Haed code the username here
    retrieveHelloWorldBean("lila")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
    // "then" means when rest API called successful, then do it
  }

  function successfulResponse(response) {
    console.log(response);
    // Getting call back from 8000 and show data("Hello world") in the tags
    // setMessage(response.data);
    setMessage(response.data.message);
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
      <div className="text-info">{message}</div>
    </div>
  );
}
