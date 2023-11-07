import { apiClient } from "./ApiClient";
// Take the token as input
export const executeBasicAuthenticationService = (token) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token, // Don't add "" here !!
    },
  });

export const executeJwtAuthenticationService = (username, password) =>
  // It will get token from the back end(though I DON'T know what happened in the back end!)
  apiClient.post(`/authenticate`, { username, password }); // Note: Here is POST request!
