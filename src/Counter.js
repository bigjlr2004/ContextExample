import { useMealsListContent } from "./MealsProvider";

const Counter = () => {
  const { meals } = useMealsListContent();
  return (
    <div>
      <h3>Number of Meals today : {meals.length} </h3>
    </div>
  );
};

export default Counter;
