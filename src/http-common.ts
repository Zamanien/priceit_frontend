import axios from "axios";

export const httpSearch = axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: "https://priceit-backend.zamanien.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const httpAuth = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://priceit-auth.zamanien.com/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json"
  }
})