import React, { useState } from "react";

const initState = ["Siegfred", "Elizabeth"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    persons.push("Samantha");
    persons.push("Jason");
    setPersons(persons);
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
