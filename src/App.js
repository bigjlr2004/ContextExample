import "./App.css";
import Counter from "./Counter";
import MealsList from "./MealsList";
import MealsProvider from "./MealsProvider";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
