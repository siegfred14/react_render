import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const UpdatedContext = React.createContext();
const CountProvider = UpdatedContext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>{children}</CountProvider>
    </>
  );
};
