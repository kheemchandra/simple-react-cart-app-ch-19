import { notificationActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => { 
  return async (dispatch) => { 
    
    const getData = async () => {
      const response = await fetch('https://food-order-19-test-default-rtdb.firebaseio.com/cart.json');
      if(!response.ok){
        throw new Error('Fetching cart data failed!');
      }

      const data = await response.json(); 
      dispatch(cartActions.replaceCart(data));
    };

    getData().catch(error => { 
      dispatch(notificationActions.failure('Fetching cart data failed!'));
    });
  };
};

export const sendCartData = (cart) => {  
  return async (dispatch) => {   
    dispatch(notificationActions.show('Sending cart data!'));
    
    const sendData = async () => {
      const response = await fetch('https://food-order-19-test-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({items: cart.items, quantity: cart.quantity})
      });

      if(!response.ok){
        throw new Error('Sending cart data failed!');
      }
      
      dispatch(notificationActions.success('Sent cart data successfully!'));
    };

    sendData().catch(error => {
      dispatch(notificationActions.failure('Sending cart data failed!'));
    });
  };  
};