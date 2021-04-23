import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCxt = useContext(CartContext);

  const numberOfCartItems = cartCxt.items.reduce((count, item) => {
    return count + item.amount;
  }, 0);

  return (
    <button onClick={props.onToggleCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
