import styles from "./foodItem.module.css";
export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.strMealThumb} alt="" />
      <div className={styles.itemcontent}>
        <p className={styles.itemName}>{food.strMeal}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.idMeal);
            setFoodId(food.idMeal)
          }}
          className={styles.itemButton}
        >
          view Recipe
        </button>
      </div>
    </div>
  );
}
