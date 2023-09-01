import { useRef, useState } from "react";

export default function Input() {
  const input = useRef(null);
  const [color, setColor] = useState("white");
  function changeColor() {
    if (!input.current) return; // null일 때 예외처리

    setColor(input.current.value);
    input.current.value = "";
    input.current.focus();
  }
  return (
    <>
      <div
        style={{
          width: "300px",
          padding: "1em",
          textAlign: "center",
          backgroundColor: color,
        }}
      >
        <input type="text" ref={input} />
        <button onClick={changeColor}>색 적용</button>
      </div>
    </>
  );
}
