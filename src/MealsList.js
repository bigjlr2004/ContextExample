import { useMealsListContent } from "./MealsProvider";

const MealsList = () => {
  const { meals } = useMealsListContent();
  return (
    <div>
      <h1>List Using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};

export default MealsList;
