import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "./security/AuthContext";
import { useContext } from "react";

export default function HeaderComponent() {
  // const authContext = useContext(AuthContext);
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  // When click logout, the value of isAuthenticated will be false
  function logout() {
    authContext.logout();
  }
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a href="/" className="navbar-brand ms-2 fs-2 fw-bold text-black">
              Todo Manager
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* When authenticaed failed, show this component */}
                  {!isAuthenticated && (
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {!isAuthenticated && (
                    <Link to=" " className="nav-link">
                      Sign up
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* When authenticaed successfully, show this component */}
                {isAuthenticated && (
                  <Link to="/todos" className="nav-link">
                    Todo lists
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated && (
                  <Link to="/logout" className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
