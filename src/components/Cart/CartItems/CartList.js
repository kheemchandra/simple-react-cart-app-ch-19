import { useContext } from "react";

import CartContext from "../../../store/use-context";
import CartItem from "./CartItem";

import classes from "./CartList.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "Test Item-1",
    description: "This is a first product - amazing!",
    price: 6,
  },
  {
    id: "i2",
    name: "Test Item-2",
    description: "This is a second product - amazing!",
    price: 12,
  },
  {
    id: "i3",
    name: "Test Item-3",
    description: "This is a third product - amazing!",
    price: 50,
  },
];

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;

  if (!cartCtx.quantity) {
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
        addItem={cartCtx.addItem.bind(null, item)}
        removeItem={cartCtx.removeItem.bind(null, item.id)}
      />
    );
  });

  return <ul>{content}</ul>;
};

export default CartList;
