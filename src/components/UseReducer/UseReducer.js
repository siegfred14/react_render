import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("UseReducer Render");
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

// useReducer          and            Render
// The dispatch function from a useReducer hook will cause the component to re-render
// The exception us when you update the state to the same value as he current state
// Same value after the initial render? The component will not re-render
// Same value after re-render? React will render tat specific component one more time and then bails out from from any subsequent renders.
