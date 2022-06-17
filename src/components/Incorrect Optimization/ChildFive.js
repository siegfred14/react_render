import React from "react";

export const ChildFive = ({ name }) => {
  console.log("CHild Five Component");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
