import axios from "axios";

const access_token = localStorage.getItem("access_token")
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
    "Content-type": "application/json",
    "Authorization": access_token
  }
})