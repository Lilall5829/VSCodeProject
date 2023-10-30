import { useParams, Link } from "react-router-dom";
export default function WelcomeComponent() {
  // Get the username from URL
  const { username } = useParams();
  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        {/* Use Link tag (Link to),it should be imported above */}
        {/* Link tag helps your app render components that need re-rendering based on a specified route rather than refreshing the whole page like anchor tag! */}
        Manage your todos. <Link to="/todos">Start here</Link>
      </div>
    </div>
  );
}
