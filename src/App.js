import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onToggleCart={toggleCartHandler} />}
      <Header onToggleCart={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
