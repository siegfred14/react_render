import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { ChildOne } from "./ChildOne";
// import { ChildOne } from "./ChildOne";

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ParentOne Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      {/* <ChildOne /> */}
      {children}
    </div>
  );
};

// Causes for re-render
// 1.) A component can re-render if it calls a setter function or a dispatch function
// 2.) A component can render if it's parent component is rendered

// The {children} component could be any name
// component can change it's state but not it's props
// React automatically provides the optimization
// React looks at the OptParentOne Component
// It converts button and children this.props.
// Re-render is caused by a state chaange in OptParentOne
// Since component has no means of directly changing the props, children props couldn't have changed
// Instead of going through the render state for the ChildOne Component, we simply make use of the React element that was previously created
// Children props has to be referencing the same element from the previous render, and will skip the render phase for the ChildOne component
