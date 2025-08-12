import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
    const uniqueCount = new Set(storedCart.map(item => item.id)).size;
    setCount(uniqueCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const uniqueCount = new Set(cartItems.map(item => item.id)).size;
    setCount(uniqueCount);
  }, [cartItems]);

  const addToCartLocal = (product, quantityToAdd = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: quantityToAdd,
          },
        ];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa sản phẩm
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, count, addToCartLocal, increaseQuantity, decreaseQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};