import api from "../api/axiosInstance";

export const getCart = () => api.get("/carts");