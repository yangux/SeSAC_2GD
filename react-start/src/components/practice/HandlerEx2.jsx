import { useState } from "react";

export default function HandlerEx2() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색 글씨");
  return (
    <>
      <h1 style={{ color: color }}>{text}</h1>
      <button
        onClick={() => {
          setColor("red");
          setText("빨간색 글씨");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setColor("blue");
          setText("파란색 글씨");
        }}
      >
        파란색
      </button>
    </>
  );
}
