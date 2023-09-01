import { useRef } from "react";

export default function Game() {
  const input = useRef(null);

  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);
  const opArr = ["+", "-", "*"];
  const op = opArr[Math.floor(Math.random() * opArr.length)];
  //   const result = calculateResult();

  // eval() -> 브라우저마다 동작이 달라서 권장하지 않지만
  // eval(문자열) => 그 문자열을 계산해준다.
  const result = eval(num1 + op + num2);

  function calculateResult() {
    if (op === "+") return num1 + num2;
    else if (op === "-") return num1 - num2;
    else if (op === "*") return num1 * num2;

    return 0;
  }

  function showResult(result) {
    const answer = Number(input.current?.value);

    if (result === answer) {
      alert("정답입니다!");
      window.location.reload();
    } else {
      alert("틀렸습니다!");
    }

    input.current.value = "";
    input.current.focus();
  }
  return (
    <>
      <span>{num1}</span>
      <span>{op}</span>
      <span>{num2}</span>
      <br />
      <input type="text" ref={input} />
      <button onClick={() => showResult(result)}>정답 제출</button>
    </>
  );
}
