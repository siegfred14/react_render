import React from "react";

export const ChildThree = ({ children, name }) => {
  console.log("ChildThree Render");
  return (
    <div>
      <h1>
        {children} {name}
      </h1>
    </div>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);
