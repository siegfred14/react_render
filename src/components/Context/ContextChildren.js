import React, { useContext } from "react";
import { UpdatedContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Child A Render");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};

export const ChildB = () => {
  console.log("Child B Render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(UpdatedContext);
  console.log("Child C Render");
  return (
    <>
      <div>Child C count = {count} </div>
    </>
  );
};
