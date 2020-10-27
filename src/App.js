import "./App.css";
import { NavBar } from "./components/header/NavBar";
import { LogicOfLaptop } from "./containers/LogicOfLaptops";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LogicOfLaptop />
    </div>
  );
}

export default App;
