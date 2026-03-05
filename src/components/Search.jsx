import { useState, useEffect } from "react";
const URL = " https://www.themealdb.com/api/json/v1/1/search.php?s";
export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("");
  // syntax of the useEffect hook //
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data.meals)
      setFoodData(data.meals)
    }
    fetchFood()
  }, [query]);
  function handleClick(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input onChange={handleClick} type="text" value={query} />
    </div>
  );
}
