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
