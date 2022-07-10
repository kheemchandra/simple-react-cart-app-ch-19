import React, { useState, useReducer} from 'react';

import CartContext from './use-context';

const initialCart = {
  items: [], // item: {id, name, desciption, price, quantity}
  quantity: 0,
};

const cartReducer = (state, action) => {
  let updatedState = {};
  updatedState.quantity = state.quantity;
  updatedState.items = state.items.concat();
  if(action.type === 'ADD'){ // action = {type: 'ADD', item: {id, name, desciption, price}}
    let item = action.item;
    let index = updatedState.items.findIndex(i => i.id === item.id);
    let updatedItem = updatedState.items[index];
    if(typeof(updatedItem) === 'undefined'){
      item.quantity = 1;
      updatedState.items.push(item);
      updatedState.quantity += 1;
    }else{
      updatedItem.quantity += 1;
    } 
    return updatedState;
  }
  if(action.type === 'REMOVE'){ // action = {type: 'REMOVE', id: id}
    let index = updatedState.items.findIndex(item => item.id === action.id);
    let updatedItem = updatedState.items[index];
    if(updatedItem.quantity === 1){ 
      updatedState.items = updatedState.items.filter(item => item.id !== updatedItem.id);
      updatedState.quantity -= 1;
    }else{
      updatedItem.quantity -= 1;
    }
    return updatedState;
  }
  return initialCart;
};

const ContextProvider = (props) => {
  const [showCart, setShowCart] = useState(true);
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addItemHandler = (item) => {
    dispatch({type: 'ADD', item: item});
  };

  const removeItemHandler = (id) => {
    dispatch({type: 'REMOVE', id: id})
  };

  const toggleCartHandler = () => {
    setShowCart(state => !state);
  };

  const ctxObj = {
    showCart: showCart,
    quantity: cart.quantity, 
    items: cart.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    toggleCart: toggleCartHandler
  };

  return <CartContext.Provider value={ctxObj}>
    {props.children}
  </CartContext.Provider>
};

export default ContextProvider;