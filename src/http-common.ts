import axios from "axios";

export const httpSearch = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const httpAuth = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json"
  }
})