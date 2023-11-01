import { useState, createContext, useContext } from "react";
// 1. Create a Context
export const AuthContext = createContext();
// This hooks makes us to access the value in the authenticationcontext
export const useAuth = () => useContext(AuthContext);

// 2. Share the created contect with other components
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  function login(username, password) {
    // add a hard code authentication
    if (username === "lila" && password === "123") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

//
