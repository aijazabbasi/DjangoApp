import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://e34fb71d-a4d6-4763-b226-06bd186d6848-dev.e1-us-cdp-2.choreoapis.dev/djangoapp/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
