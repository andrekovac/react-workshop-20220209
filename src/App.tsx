import "./App.css";
import Counter from "./components/Counter";
import Name from "./components/Name";

const App = () => {
  const names = ["Andre", "Hans", "Janine", "Michelle"];

  // <Name>Andre</Name>

  return (
    <div className="App">
      <Counter />
      {names.map((name) => {
        return <Name key={name}>{name}</Name>;
      })}
    </div>
  );
};

export default App;
