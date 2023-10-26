import axios from "axios";
import { getUserFromLocalStorage } from "../features/User/userSlice";

const customAxios = axios.create({
  baseURL: `https://jobify-prod.herokuapp.com/api/v1/toolkit`,
});
customAxios.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default customAxios;
