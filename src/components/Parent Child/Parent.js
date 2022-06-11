import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  );
};

// When a perent component renders, React will reccursively render it's child component

// Cases where single component's rendering behaviour with the useState hook and how it affects the Child component
// 1.) When new state is different from th old state
// 2.) When new state is same as the old state
// a.) right after the initial render
// b.) When the component re-renders
// when you call a setter-function, or a dispatch-function, with the same state value after a re-render, React will
//     render the parent component one more time, but will not re-render the child component
//     The parent component will re-render one more time to ascertiain that it is safe to bail out of future re-renders
