import { useEffect, useState } from "react";
import { api } from "../../firebase";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch avaliable meals from firebase
  useEffect(() => {
    const fetchMeals = async () => {
      // Loading
      setIsLoading(true);

      const res = await fetch(`${api}/meals.json`);
      const data = await res.json();

      // Transform object data to array
      let arrData = [];
      for (const key in data) {
        arrData.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
        });
      }

      // Set transform data to state
      setMeals(arrData);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p style={{ color: "blue" }}>Loading...</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
