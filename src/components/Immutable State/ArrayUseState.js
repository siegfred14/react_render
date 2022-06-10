import React, { useState } from "react";

const initState = ["Siegfred", "Elizabeth"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    // persons.push("Samantha");
    // persons.push("Jason");
    // setPersons(persons);

    const newPersons = [...persons];
    newPersons.push("Samantha");
    newPersons.push("Jason");
    setPersons(newPersons);
  };

  console.log("ArrayUseState Render");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <h2>
        {persons.map((person) => (
          <div key={person}>{person}</div>
        ))}
      </h2>
    </div>
  );
};

// State Immutability and render
// 1.) Mutating an Object or an array as state will not cause
// a re-render when used with useState or useReducer hook

// 2.) To re-render, make a copy of the existing state, modify as 
// necessary and then pass the new state to the setter function

// 3.) Directly mutating the state is an easy way to create bugs in your application.
// Be sure to avoid that