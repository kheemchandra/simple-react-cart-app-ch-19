import { Fragment, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Notification from './components/UI/Notification'; 
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

export default function App() { 
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.notification.showNotification);

  useEffect(() => {
    dispatch(fetchCartData()); 
  }, [dispatch]);

  useEffect(() => { 

    if(isInitial || !cart.isChanged){
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));   
     
  }, [cart, dispatch]);

  return <Fragment>
    {notification && <Notification />}
    <Header />
    <Cart />
    <Meals />
  </Fragment>;
}
