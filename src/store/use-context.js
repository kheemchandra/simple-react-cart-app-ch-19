import React from 'react'; 

const CartContext = React.createContext({
  showCart: null,
  quantity: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  toggleCart: () => {}
});

export default CartContext