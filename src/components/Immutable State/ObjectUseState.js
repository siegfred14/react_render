import React, { useState } from "react";

const initState = {
  fname: "Samantha",
  lname: "Siegfred",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    person.fname = "Jason Ojochide";
    person.lname = "Siegfred";
    setPerson(person);
  };

  console.log("object UseState Render");

  return (
    <div>
      <h1>
        {person.fname} {person.lname}
      </h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};
