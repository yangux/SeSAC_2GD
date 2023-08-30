import { useState } from "react";

export default function HandlerEx3() {
  const [text, setText] = useState("사라져라");
  const [visibility, setVisibility] = useState("visible");

  function toggleText() {
    const newText = text === "사라져라" ? "보여라" : "사라져라";
    const visibleOption = visibility === "visible" ? "hidden" : "visible";
    setText(newText);
    setVisibility(visibleOption);
  }
  return (
    <>
      <button onClick={toggleText}>{text}</button>
      <h1 id="hi" style={{ visibility: visibility }}>
        안녕하세요
      </h1>
    </>
  );
}
