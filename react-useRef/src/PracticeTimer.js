import { useEffect, useState, useRef } from "react";

// useRef, useState, var 쓰는 3가지 방법 비교
export default function PracticeTimer() {
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      //   setCount(count + 1);
      count.current += 1;
      console.log(count.current);
    }, 1000);

    return () => {
      //   console.log("clearInterval");
      clearInterval(timer);
    };
    // 1초마다 타이머를 없애고 다시 만들기를 반복
    //   }, [count]);
  }, []);

  return (
    <>
      {/* <h1>{count}</h1> */}
      <h1>{count.current}</h1>
      <button
        onClick={() => {
          setRender(render + 1);
        }} // useRef는 값이 변해도 렌더링시키지 않기 때문에 state값을 변화시켜서 렌더링 시켜준다.
      >
        시간
      </button>
    </>
  );
}
