import classes from './CartItem.module.css';

const CartItem = props => {
  return <li className={classes['cart-item']}>
    <div className={classes['item-top']}>
      <h2>{props.name}</h2>
      <div>
        <span className={classes['total-price']}>$18.00</span>
        <span className={classes['price']}>(${props.price.toFixed(2)}/item)</span>
      </div>
    </div>
    <div className={classes['item-bottom']}>
      <span>x<span className={classes.quantity}>3</span></span>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  </li>
};

export default CartItem;