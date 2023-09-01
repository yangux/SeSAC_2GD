import { useState, useRef } from "react";

export default function RefVarState() {
  const [render, setRender] = useState(0);
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const countUpState = () => {
    setCountState(countState + 1);
    console.log("State: " + countState);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log("Variable: " + countVar);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log("Ref: " + countRef.current);
  };

  const reRender = () => {
    setRender(render + 1);
  };

  return (
    <div className="div-ref">
      <h3>variable: {countVar}</h3>
      <h3>state: {countState}</h3>
      <h3>ref: {countRef.current}</h3>
      <button onClick={countUpState}>State UP!</button>
      <button onClick={countUpRef}>Ref UP!</button>
      <button onClick={countUpVar}>Variable UP!</button>
      <button onClick={reRender}>렌더링!</button>
    </div>
  );
}
