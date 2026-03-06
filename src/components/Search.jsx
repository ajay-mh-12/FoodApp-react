import styles from "./search.module.css";
import { useState, useEffect } from "react";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  // syntax of the useEffect hook //
  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
        );
        const data = await res.json();
        console.log(data.meals);
        setFoodData(data.meals)

        if (!data.meals) {
          setError("food not found");
          setFoodData([]);
        } else {
          setFoodData(data.meals);
          setError("");
        }
      } catch (error) {
        setError("food not found");
      }
    }
    fetchFood();
  }, [query]);
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.search}>
      <input onChange={handleChange} type="text" value={query} />
    </div>
  );
}
