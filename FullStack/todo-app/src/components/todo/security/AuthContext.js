import { useState, createContext, useContext } from "react";
// 1. Create a Context
export const AuthContext = createContext();
// This hooks makes us to access the value in the authenticationcontext
export const useAuth = () => useContext(AuthContext);

// 2. Share the created contect with other components
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(username, password) {
    // add a hard code authentication
    if (username === "lila" && password === "123") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//