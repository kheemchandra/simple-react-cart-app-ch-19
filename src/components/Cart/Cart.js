import { useSelector } from 'react-redux';

import Card from "../UI/Card";
import CartList from "./CartItems/CartList"; 

import classes from "./Cart.module.css";

const Cart = (props) => {
  const showCart = useSelector(state => state.ui.showCart);

  let content = (
    <Card className={classes.cart}>
      <h3>Your Shopping Cart</h3>
      <CartList />
    </Card>
  );

  if (!showCart) {
    content = null;
  }

  return  content ; 
};

export default Cart;
