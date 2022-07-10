import classes from './Header.module.css';

const Header = props => {
  return <header className={classes.header}>
    <nav className={classes.nav}>
    <h1>ReduxCart</h1>
    <button className={classes['button--cart']}>
      <span>My Cart</span>
      <span className={classes.count}>1</span>
    </button>
  </nav>
  </header>
};

export default Header;