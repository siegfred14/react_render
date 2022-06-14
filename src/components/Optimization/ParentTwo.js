import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { ChildOne } from "./ChildOne";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <ChildOne />
    </div>
  );
};
