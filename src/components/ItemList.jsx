import styles from "./item.module.css"
export default function ItemList({ food }) {
  let measure = [];
  for (let i = 1; i < 20; i++) {
    const ingredient = food[`strIngredient${i}`];
    const ingrediantMeasure = food[`strMeasure${i}`];
    if (ingredient) {
      measure.push({ ingredient, ingrediantMeasure });
    }
  }
  return (
    <div>
      <div className={styles.recipeDetails}>
        <div className={styles.recipeInstruction}>
          <h2 className={styles.instruction}>Instructions</h2>
          {food.strInstructions}
        </div>
        <div>
          <ul>
            {measure.map((item) => (
              <li>
                {item.ingredient} - {item.ingrediantMeasure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
