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

// React.memo
// In React, when a parent component renders, a child component might unnecesarily render
// To optimize this behaviour, we can use React.memo and pass in the child component
// It will re-render the child component only if the props have changed

// NOTE: memo only does a shallow comparison of the previous and new props
// However, we can pass in the custom comparison function as the second argument to React.memo to meet expected requirement
