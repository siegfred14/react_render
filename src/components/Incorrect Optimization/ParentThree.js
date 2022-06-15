import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Siegfred");

  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <button onClick={() => setName("Samson")}> Change Name</button>
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name} />
    </div>
  );
};

// even though the name value did not change, the child component re-rendered
// this is because of the children props

// IMPORTANT: There is no need to wrap your child component with React.memo, if the same child component has children elements
