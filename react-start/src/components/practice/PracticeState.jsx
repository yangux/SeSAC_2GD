import { useState } from "react";

export default function UseState() {
  const [num, setNum] = useState(0);

  let variable = 0;
  function setVariable() {
    variable += 1;
    // useState로 state값을 업데이트할 때마다 재렌더링 되기 때문에 variable 값은 계속 0에서 1을 더하는 것을 반복하게 된다.
    console.log(`변수(variable): ${variable} / 스테이트(num): ${num}`);
  }
  return (
    <div>
      <div>
        {num}
        {num > 7 ? " 😡" : " 😃"}
      </div>
      <button
        onClick={() => {
          setNum(num + 1);
          setVariable();
        }}
      >
        +1
      </button>
      <button onClick={() => setNum(num - 1)}>-1</button>
    </div>
  );
}
