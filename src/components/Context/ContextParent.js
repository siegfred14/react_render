import React, { useState } from "react";

export const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </>
  );
};
