import axios from "axios";
// export function retrieveHelloWorldBean() {
//   // How to call the rest apis in React: axios
//   return axios.get("http://localhost:8080/hello-world-bean");
// }

// A simpler way to use axios: create an arrow function
// export const retrieveHelloWorldBean = () =>
//   axios.get("http://localhost:8080/hello-world-bean");

axios.create({
  baseURL: "http://localhost:8080",
});

// How to get a parameter from URL:
export const retrieveHelloWorldBean = (username) =>
  axios.get(`/hello-world/path-variable/${username}`);
