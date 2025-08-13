import api from "../api/axiosInstance";
// import apiCart from "../api/apiCart";

export const getAllProducts = () => api.get("/products?limit=100");

export const getDetailProduct = (id) => api.get(`/products/${id}`);

export const getSearchProducts = (searchValue) => api.get(`/products/search?q=${searchValue}&limit=5`);