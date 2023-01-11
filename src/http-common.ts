import axios from "axios";

export const httpSearch = axios.create({
  baseURL: `${import.meta.env.VITE_SEARCH_BASE_URL}`,
  headers: {
    "Content-type": "application/json"
  }
});

export const httpAuth = axios.create({
  baseURL: `${import.meta.env.VITE_SEARCH_BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-type": "application/json"
  }
})