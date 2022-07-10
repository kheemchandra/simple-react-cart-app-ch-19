import classes from './CartItem.module.css';

const CartItem = props => {
  const total = props.quantity * props.price;

  return <li className={classes['cart-item']}>
    <div className={classes['item-top']}>
      <h2>{props.name}</h2>
      <div>
        <span className={classes['total-price']}>${total.toFixed(2)}</span>
        <span className={classes['price']}>(${props.price.toFixed(2)}/item)</span>
      </div>
    </div>
    <div className={classes['item-bottom']}>
      <span>x<span className={classes.quantity}>{props.quantity}</span></span>
      <div className={classes.actions}>
        <button onClick={props.removeItem}>-</button>
        <button onClick={props.addItem}>+</button>
      </div>
    </div>
  </li>
};

export default CartItem;