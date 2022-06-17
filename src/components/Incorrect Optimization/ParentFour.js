import { render } from "@testing-library/react";
import React, { Component, useState, useMemo } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Onyekachi");

  const person = {
    fname: "Elizabeth",
    lname: "Siegfred",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <button onClick={() => setName("Samson")}> Change Name</button>
      <MemoizedChildFive name={name} person={memoizedPerson} />
    </div>
  );
};

// NB: If your component has objects or functions as props and you're wrapping one of it's child
// components with React.memo, it is an incorrect usage of Memoization
