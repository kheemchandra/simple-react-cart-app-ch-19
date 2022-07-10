import { useDispatch, useSelector} from 'react-redux';

import CartItem from "./CartItem";
import { cartActions } from '../../../store/cart-slice';

import classes from "./CartList.module.css";


const CartList = (props) => { 
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.quantity);
  const items = useSelector(state => state.cart.items);

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };

  if (!quantity) {
    return (
      <p className={classes["empty-cart"]}>
        Your cart is empty. Please add items to your cart.
      </p>
    );
  }

  let content = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        removeItem={removeItemHandler.bind(null, item.id)}
        addItem={addItemHandler.bind(null, item)}
      />
    );
  });

  return <ul>{content}</ul>;
};

export default CartList;
