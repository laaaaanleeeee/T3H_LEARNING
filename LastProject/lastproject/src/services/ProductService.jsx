import api from "../api/axiosInstance";

export const getProducts = () => {
    return api.get("/products")
}