import { render } from "@testing-library/react";
import React, { useState } from "react";
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
