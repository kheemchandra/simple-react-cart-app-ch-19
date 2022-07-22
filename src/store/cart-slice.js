import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { quantity: 0, items: [], isChanged: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action){
      const data = action.payload;
      state.items = data.items || [];
      state.quantity = data.quantity;
    },
    addItem(state, action) {
      let item = {...action.payload}; 
      let index = state.items.findIndex((i) => i.id === item.id);
      let updatedItem = state.items[index];
      if (typeof updatedItem === "undefined") {
        item.quantity = 1;
        state.items.push(item); 
      } else {
        updatedItem.quantity += 1;
      }
      state.quantity++;
      state.isChanged = true;
    },
    removeItem(state, action) {
      let id = action.payload;
      let index = state.items.findIndex((item) => item.id === id);
      let updatedItem = state.items[index];
      if (updatedItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== updatedItem.id
        ); 
      } else {
        updatedItem.quantity -= 1;
      }
      state.quantity--;
      state.isChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;