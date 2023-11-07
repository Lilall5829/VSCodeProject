// export function retrieveHelloWorldBean() {
//   // How to call the rest apis in React: axios
//   return axios.get("http://localhost:8080/hello-world-bean");
// }

// A simpler way to use axios: create an arrow function
// export const retrieveHelloWorldBean = () =>
//   axios.get("http://localhost:8080/hello-world-bean");

import { apiClient } from "./ApiClient";

// How to get a parameter from URL:
export const retrieveHelloWorldBean = () => apiClient.get(`/hello-world-bean`);

// export const retrieveHelloWorldPathVariable = (username) =>
// apiClient.get(`/hello-world/path-variable/${username}`, {
//   headers: {
//     Authorization: "Basic bGlsYToxMjM=", // This value is from Talend API Tester-> Headers -> Authorization: Basic bGlsYToxMjM= But the best pracitce is get it from LoginComponet as the following code shows
//   },
// });

// Get token from context instead of hard code as before. This function is called by WelcomeComponent
export const retrieveHelloWorldPathVariable = (username) =>
  apiClient.get(
    `/hello-world/path-variable/${username}`
    // , {
    //   headers: {
    //     Authorization: "Basic bGlsYToxMjM=",
    //   },
    // }
  );
