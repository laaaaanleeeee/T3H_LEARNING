import api from "../api/axiosInstance";

export const getUserInfoApi = () => api.get("/auth/me");

