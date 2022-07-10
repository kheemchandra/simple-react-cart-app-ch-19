import CartItem from './CartItem';

import classes from './CartList.module.css';

const DUMMY_ITEMS = [
  {id: 'i1', name: 'Test Item-1', description: 'This is a first product - amazing!', price: 6},
  {id: 'i2', name: 'Test Item-2', description: 'This is a second product - amazing!', price: 12},
  {id: 'i3', name: 'Test Item-3', description: 'This is a third product - amazing!', price: 50},
];

const CartList = props => {
  let content = DUMMY_ITEMS.map(item => {
    return <CartItem key={item.id} name={item.name} price={item.price} />;
  });

  return <ul >
    {content}
  </ul>
};

export default CartList;