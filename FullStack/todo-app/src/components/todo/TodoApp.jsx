import { useState } from "react";
// Install browser router: npm install react-router-dom
// Import 6 properties
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import TodoComponent from "./TodoComponent";

import "./TodoApp.css";
// Check only when you log in successfully you can be taken to the specific route like /todos, or you will be taken to log in page
function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;
  return <Navigate to="/"></Navigate>;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      {/* Wrap all componets into AutherProvider */}
      <AuthProvider>
        <BrowserRouter>
          {/* If you want to use Link tags, you should put the component which includes Link tag into BrowserRouter tags! */}
          <HeaderComponent></HeaderComponent>

          <Routes>
            {/* These routes like @Getmapping in Spring */}
            <Route
              path="/"
              element={<LoginComponent></LoginComponent>}
            ></Route>{" "}
            {/* Show login component when open localhost:3000 */}
            <Route
              path="/login"
              element={<LoginComponent></LoginComponent>}
            ></Route>
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent></WelcomeComponent>
                </AuthenticatedRoute>
              } // Put the component which need to be authenticated into AuthenticatedRoute
            ></Route>
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent></ListTodosComponent>
                </AuthenticatedRoute>
              }
            ></Route>
            The following route is for update or new todos
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponent></TodoComponent>
                </AuthenticatedRoute>
              }
            ></Route>
            <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
            <Route
              path="/logout"
              element={<LogoutComponent></LogoutComponent>}
            ></Route>
          </Routes>
          <FooterComponent></FooterComponent>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
