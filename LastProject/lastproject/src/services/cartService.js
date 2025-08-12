import api from "../api/axiosInstance";

export const getCart = (userId) => api.get(`/carts/user/${userId}`);

// export const deleteCartItem = (cartItemId) => apiCart.delete(`/cart-items/${cartItemId}`);

export const addToCart = (userId, productId, quantity) =>
  api.post('/carts/add', {
    userId,
    products: [
      {
        id: productId,
        quantity,
      },
    ],
  });