import { useContext } from "react";

import Card from "../UI/Card";
import CartList from "./CartItems/CartList";
import CartContext from "../../store/use-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let content = (
    <Card className={classes.cart}>
      <h3>Your Shopping Cart</h3>
      <CartList />
    </Card>
  );

  if (!cartCtx.showCart) {
    content = null;
  }

  return  content ; 
};

export default Cart;
