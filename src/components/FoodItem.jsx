export default function FoodItem({ food }) {
  return (
    <div>
      <h1>{food.strMeal}</h1>
      <img src={food.strMealThumb} alt="" />
      <button>view Recipe</button>
    </div>
  );
}
