import axios from "axios";

// in production, there's no localhost so we have to make this dynamic.
// Docker port CHECK DOCKE PORT docker file.
// Localhost port check .env file
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:9090/api" : "/api";
console.log("Client Environment Mode:", import.meta.env.MODE);
console.log("Base URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;