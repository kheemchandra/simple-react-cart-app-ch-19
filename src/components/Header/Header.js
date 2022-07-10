import { useContext } from 'react';

import CartContext from '../../store/use-context';

import classes from './Header.module.css';

const Header = props => {
  const cartCtx = useContext(CartContext);

  return <header className={classes.header}>
    <nav className={classes.nav}>
    <h1>ReduxCart</h1>
    <button onClick={cartCtx.toggleCart} className={classes['button--cart']}>
      <span>My Cart</span>
      <span className={classes.count}>{cartCtx.quantity}</span>
    </button>
  </nav>
  </header>
};

export default Header;