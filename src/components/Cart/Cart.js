import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onToggleCart={props.onToggleCart}>
      {cartItems}
      <div>
        <span>Total Amounts</span>
        <span>35.49</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onToggleCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
