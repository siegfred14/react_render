import React from "react";

export const ChildTwo = () => {
  console.log("ChildTwo Render");
  return (
    <div>
      <h1>ChildTwo Component</h1>
    </div>
  );
};

export const MemoizedChildTwo = React.memo(ChildTwo);

// NOTE: memo only does a shallow comparison of the previous and new props
// However, we can pass in the custom comparison function as the second argument to React.memo to meet expected requirement
