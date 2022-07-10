import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

import classes from './Header.module.css';

const Header = props => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.quantity);
  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return <header className={classes.header}>
    <nav className={classes.nav}>
    <h1>ReduxCart</h1>
    <button onClick={toggleCartHandler} className={classes['button--cart']}>
      <span>My Cart</span>
      <span className={classes.count}>{quantity}</span>
    </button>
  </nav>
  </header>
};

export default Header;