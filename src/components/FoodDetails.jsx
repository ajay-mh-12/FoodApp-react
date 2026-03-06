import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
      );
      const data = await response.json();
      console.log(data.meals[0]);
      setFood(data.meals[0]);
    }
    fetchdata();
  }, [foodId]);

  return (
    <div key={food.id}>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}>{food.strCategory}</h2>
        <img className={styles.recipeImage} src={food.strMealThumb} alt="" />
      </div>
      <span>
        <strong>{food.strArea}</strong>
      </span>
      <ItemList food={food} />
    </div>
  );
}
