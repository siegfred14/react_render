import "./App.css";
import { ChildA } from "./components/Context/ContextChildren";
import { ContextParent } from "./components/Context/ContextParent";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ParentFour } from "./components/Incorrect Optimization/ParentFour";
import { ParentThree } from "./components/Incorrect Optimization/ParentThree";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ParentTwo } from "./components/Optimization/ParentTwo";
import { Parent } from "./components/Parent Child/Parent";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
