import { useState, createContext, useContext } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";
// 1. Create a Context
export const AuthContext = createContext();
// This hooks makes us to access the value in the authenticationcontext
export const useAuth = () => useContext(AuthContext);

// 2. Share the created contect with other components
// {children} is a special prop that allows you to pass and render child components or content within a parent component. It is a commonly used pattern for creating reusable components that can wrap and manipulate their children.
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);
  // set token to the context
  const [token, setToken] = useState(null);

  // function login(username, password) {
  //   // add a hard code authentication
  //   if (username === "lila" && password === "123") {
  //     setAuthenticated(true);
  //     setUsername(username);
  //     return true;
  //   } else {
  //     setAuthenticated(false);
  //     setUsername(null);
  //     return false;
  //   }
  // }

  // Basic Authentication
  // Get token from Login instead of hard code authentication
  // async function login(username, password) {
  //   const baToken = "Basic " + window.btoa(username + ":" + password); // Pay attention to the format
  //   try {
  //     const response = await executeBasicAuthenticationService(baToken);

  //     if (response.status == 200) {
  //       setAuthenticated(true);
  //       setUsername(username);
  //       setToken(baToken);
  //       // As soon as you use the login and any apiClients called, add the token to the header
  //       apiClient.interceptors.request.use((config) => {
  //         console.log("intercepting and adding a token");
  //         config.headers.Authorization = baToken;
  //         return config;
  //       });

  //       return true;
  //     } else {
  //       logout();

  //       return false;
  //     }
  //   } catch (error) {
  //     logout();
  //     return false;
  //   }
  // }

  // JWT Token
  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        // It will return token through API from the back end(though I DON'T know what happened in the back end!)and here we store it into response!
        username,
        password
      );

      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token; // Don't miss the space in the "Bearer "!!!
        console.log(response);
        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);
        // As soon as you use the login and any apiClients called, add the token to the header
        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          console.log(config);
          return config;
        });

        return true;
      } else {
        logout();

        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername(null);

    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//
