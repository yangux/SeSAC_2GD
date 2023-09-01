import { useRef } from "react";

function DOMComponent() {
  const inputRef = useRef(null);
  const getInput = () => {
    // DOM에서 input을 선택해 값ㅇ르 가져오는 역할
    const input = document.getElementById("input");
    console.log("input value1: ", input.value);
  };
  const getInput2 = () => {
    // DOM에서 input을 선택해 값을 가져오는 역할
    // const input = document.getElementById("input");

    // current에 ? 붙이는 이유: ref가 null이라면 함수가 실행되지 않도록 막는다.
    // if (!input.current) return; 와 같은 의미
    console.log("input value2: ", inputRef.current?.value);
  };
  return (
    <>
      <div>
        <input type="text" id="input" ref={inputRef} />
        <button onClick={getInput}>버튼</button>
        <button onClick={getInput2}>버튼2</button>
      </div>
    </>
  );
}

export default DOMComponent;
