import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Onyekachi");

  const person = {
    fname: "Elizabeth",
    lname: "Siegfred",
  };

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> count - {count} </button>
      <button onClick={() => setName("Samson")}> Change Name</button>
      <MemoizedChildFive name={name} person={person} />
    </div>
  );
};
