import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Cole Slaw", "Baked Potato"];

const MealsProvider = ({ children }) => {
  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContent = () => React.useContext(MealsContext);
export default MealsProvider;
