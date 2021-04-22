import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
