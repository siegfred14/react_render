import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { ChildOne } from "./ChildOne";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Siegfred");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <button onClick={() => setName("Samson")}> Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};

// WHEN TO USE SAME ELEMENT REFERENCE TECHNIQUE AND WHEN TO USE REACT.MEMO
// Same Element Reference                               -   React Memo
// 1.) When your parent component re-renders                When your child component is being asked to re-render
// because of state change in the parent component          due to changes in the parent's state which do not affect
// ---                                                      the child component prop in any way

// 2.) This technique does not work if the parent
// component re-renders because of hanges in
// it's props

// State change? Yes
// Props change? No
