import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { showCart: false }; 
const initialNotificationState = { showNotification: false, status: '', message: '' };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    } 
  },
});

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    show(state, action) {
      state.showNotification = true;
      state.status = 'LOADING';
      state.message = action.payload;
    },
    success(state, action){
      state.showNotification = true;
      state.status = 'SUCCESS';
      state.message = action.payload;
    },
    failure(state, action){      
      state.showNotification = true;
      state.status = 'FAILURE';
      state.message = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;
export const notificationActions = notificationSlice.actions;


export default uiSlice;