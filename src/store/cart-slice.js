import { createSlice } from "@reduxjs/toolkit";
 
const initialCartState = { quantity: 0, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
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
    },
  },
});

 
export const cartActions = cartSlice.actions;

export default cartSlice;