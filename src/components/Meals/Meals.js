import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
};

export default Meals;
