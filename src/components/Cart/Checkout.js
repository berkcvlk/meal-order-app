import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

// Validation Functions
const isEmpty = (val) => val.trim() === "";
const isNotFiveChars = (val) => val.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    // Simple Validation
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid =
      !isNotFiveChars(postalCode) && !isEmpty(postalCode);
    const cityIsValid = !isEmpty(city);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      // Error
      return;
    }

    props.onConfirm({
      name,
      street,
      postalCode,
      city,
    });
  };

  // Classes for inputs include if they occur error
  const nameInputClasses = `${classes.control} ${
    !formInputsValidity.name ? classes.invalid : ""
  }`;

  const streetInputClasses = `${classes.control} ${
    !formInputsValidity.street ? classes.invalid : ""
  }`;

  const postalCodeInputClasses = `${classes.control} ${
    !formInputsValidity.postalCode ? classes.invalid : ""
  }`;

  const cityInputClasses = `${classes.control} ${
    !formInputsValidity.city ? classes.invalid : ""
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && (
          <p className={classes["error-text"]}>Name is empty</p>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && (
          <p className={classes["error-text"]}>Street is empty</p>
        )}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && (
          <p className={classes["error-text"]}>
            Postal is empty or longer than 5 characters
          </p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && (
          <p className={classes["error-text"]}>City is empty</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onToggle}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
