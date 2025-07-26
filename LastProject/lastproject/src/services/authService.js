import api from "../api/axiosInstance";

export const login = (email, password) =>
  api.post("/auth/login", { email, password });