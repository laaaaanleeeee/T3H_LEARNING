import React from 'react';

const CartItem = ({ product, onIncrease, onDecrease }) => {
  return (
    <div className="cart-item">
      <img src={product.thumbnail} alt={product.title} />
      <div className="cart-details">
        <h4>{product.title}</h4>
        <p>Giá: {product.price.toLocaleString()}đ</p>
        <div className="cart-actions">
          <button onClick={() => onDecrease(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => onIncrease(product.id)}>+</button>
        </div>
        <p>Tổng: {(product.price * product.quantity).toLocaleString()}đ</p>
      </div>
    </div>
  );
};

export default CartItem;