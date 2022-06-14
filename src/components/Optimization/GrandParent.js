import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        Grandparent Count - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};

// Same Element Reference
// In React, when a parent component renders, React will recursively render all of it's child components.
// This can however lead to "unnecesary renders" where the child component goes through the render phase but not the commit phase
// So, IF YOU'RE EXPERIENCING PERFORMANCE ISSUES, you can extract the expensive child component and instead, pas it down as props to the parent component
// In doing so, whenever there is a re-render caused by a change in the state of the parent component, React will optimize the re-render for you by
// knowing that the props has to be referencing the same element before and after the render
