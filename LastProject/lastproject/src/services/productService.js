import api from "../api/axiosInstance";

export const getAllProducts = () => api.get("/products");

export const getDetailProduct = (id) => api.get(`/products/${id}`);

export const getSearchProducts = (searchValue) => api.get(`/products/search?q=${searchValue}&limit=5`);