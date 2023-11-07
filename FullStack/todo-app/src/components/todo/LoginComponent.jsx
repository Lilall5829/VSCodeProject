import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
export default function LoginComponent() {
  const [username, setUsername] = useState("lila");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  // navigate hook is used to jump to a new url
  const navigate = useNavigate();
  const authContext = useAuth();
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    // console.log(event);

    setPassword(event.target.value);
  }
  async function handleSubmit() {
    // Authorization
    if (await authContext.login(username, password)) {
      // When authenticate successfully, navigate to /welcome/username,and pass username to welcome page
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }
  // Use short-circuit to simplify the following code
  // function SuccessMessageComponet(){
  //     if(showSuccessMessage)
  //     return(
  //         <div className="successMessage">Authenticated Successfully</div>
  //     )
  //     return null
  // }
  // function ErrorMessageComponet(){
  //     if(showErrorMessage)
  //     return(
  //         <div className="errorMessage">Authentication Failed. Please check your creadenials.</div>
  //         )
  //     return null
  // }

  return (
    <div className="Login">
      <h1>Please log in</h1>
      {/* Short-circuit   */}
      {showErrorMessage && (
        <div className="errorMessage">
          Authentication Failed. Please check your creadenials.
        </div>
      )}
      {/* <SuccessMessageComponet></SuccessMessageComponet> */}
      {/* <ErrorMessageComponet></ErrorMessageComponet> */}
      <div className="LoginForm">
        <div>
          <label htmlFor="">Username</label>
          {/* Use value to authenticate user and password and call onChange */}
          {/* When you pass value, you must also pass an onChange handler that updates the passed value. */}
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
