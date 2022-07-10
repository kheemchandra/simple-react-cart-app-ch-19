import { Fragment } from 'react';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

export default function App() {
  return <Fragment>
    <Header />
    <Cart />
    <Meals />
  </Fragment>;
}
