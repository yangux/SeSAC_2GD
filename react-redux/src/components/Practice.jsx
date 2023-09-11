import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Practice() {
  const input = useRef();
  const dispatch = useDispatch();
  const number = useSelector((state) => state);
  return (
    <>
      <h3>실습문제</h3>
      <h4>{number}</h4>
      <input type="number" ref={input} />
      <button
        onClick={() => {
          dispatch({ type: "증가", number: input.current.value });
          input.current.value = "";
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: "감소", number: input.current.value });
          input.current.value = "";
        }}
      >
        빼기
      </button>
    </>
  );
}
