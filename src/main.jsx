 import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './components/Cart';

const cartRoot = ReactDOM.createRoot(document.getElementById('cart-root'));
cartRoot.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>
);
