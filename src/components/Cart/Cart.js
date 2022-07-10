import classes from './Cart.module.css';

import Card from '../UI/Card';
import CartList from './CartItems/CartList';

const Cart = props => {
  return <Card className={classes.cart}>
    <h3>Your Shopping Cart</h3>
    <CartList />
  </Card>
};

export default Cart;