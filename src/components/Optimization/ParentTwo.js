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
