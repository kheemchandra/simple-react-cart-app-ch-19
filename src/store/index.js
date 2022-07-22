import { configureStore } from "@reduxjs/toolkit";

import uiSlice, { notificationSlice } from "./ui-slice";

import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, notification: notificationSlice.reducer } 
});

export default store;