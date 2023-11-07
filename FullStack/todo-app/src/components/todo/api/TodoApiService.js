import { apiClient } from "./ApiClient";

export const retrieveAllTodosForUsernameApi = (
  username //The parameters here depend on the parameters in the URL
) => apiClient.get(`/users/${username}/todos`);
//http://localhost:8080/users/in28minutes/todos

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const addTodoApi = (username, todo) =>
  apiClient.post(`/users/${username}/todos`, todo);
