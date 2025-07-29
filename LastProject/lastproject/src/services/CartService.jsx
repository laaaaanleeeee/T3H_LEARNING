import api from "../api/axiosInstance";

export const getCartItems = () => {
    return api.get("/cart")
}