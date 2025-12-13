import React from 'react';
import CartItem from './CartItem';

function CartList({ items, onRemove, onUpdateQuantity }) {
  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty</p>
        <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="cart-items">
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </div>
  );
}

export default CartList;
