import { useState } from "react";

export default function Handler_ex() {
  const [text, setText] = useState("Hello World!");

  return (
    <>
      <h1>{text}</h1>
      <button
        onClick={() => {
          setText("Goodbye World!");
        }}
      >
        클릭
      </button>
    </>
  );
}
