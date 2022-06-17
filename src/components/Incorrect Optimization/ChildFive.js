import React from "react";

export const ChildFive = ({ name }) => {
  console.log("Child Five Component");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
