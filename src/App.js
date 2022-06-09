import "./App.css";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      <ObjectUseState />
    </div>
  );
}

export default App;
