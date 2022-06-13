import "./App.css";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { Parent } from "./components/Parent Child/Parent";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      <GrandParent />
    </div>
  );
}

export default App;
