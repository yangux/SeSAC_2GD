// import UseJSX from "./components/UseJSX";
// import FirstPractice from "./components/practice/FirstPractice";
// import ClassCom from "./components/ClassCom";
// import FunctionState from "./components/FunctionState";
// import ClassState from "./components/ClassState";
// import PracticeState from "./components/practice/PracticeState";
// import FunctionProps from "./components/FunctionProps";
// import PracticeProps from "./components/practice/PracticeProps";
// import { ClassProps, ClassProps2 } from "./components/practice/ClassProps";
// import { useState } from "react";
// import HandlerEx from "./components/practice/HandlerEx";
// import HandlerEx2 from "./components/practice/HandlerEx2";
// import HandlerEx3 from "./components/practice/HandlerEx3";
// import HandlerEx4 from "./components/practice/HandlerEx4";

import PropsMap from "./components/PropsMap";
import PororoObj from "./components/practice/PororoObj";
import PracticeMap from "./components/practice/PracticeMap";

function App() {
  // return (
  // <div>
  //   <UseJSX />
  //   <FirstPractice />
  //   <ClassCom />
  //   <FunctionState />
  //   <ClassState />
  //   <PracticeState />
  //   <FunctionProps name="사과" krPrice={5000} number={10} />
  //   <FunctionProps name="샤인머스캣" krPrice={35000} number={3} />
  //   <FunctionProps name="복숭아" />
  //   <FunctionProps>여기가 children입니다.</FunctionProps>
  //   <PracticeProps />
  //   <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cd" />
  //   <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
  // );
  // function test() {
  //   console.log("test");
  // }
  // const handleClick = (e) => {
  //   // console.log(e);
  //   e.preventDefault();
  // };
  // return (
  //   <>
  //     {/* html에서 a태그의 고유 이벤트(하이퍼링크)를 막는 방법: onclick="return false" */}
  //     <a href="https://naver.com" onClick={handleClick}>
  //       a 태그입니다.
  //     </a>
  //     <button onClick={test}>버튼</button>
  //   </>
  // );
  // return (
  //   <>
  //     <HandlerEx />
  //     <HandlerEx2 />
  //     <hr />
  //     <HandlerEx3 />
  //     <hr />
  //     <HandlerEx4 />
  //   </>
  // );

  const dataArr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 14000, number: 1 },
    { name: "pear", krPrice: 5000, number: 6 },
    { name: "apple", krPrice: 10000, number: 14 },
  ];
  return (
    <>
      <PropsMap arr={dataArr} />
      <PracticeMap />
      <hr />
      <PororoObj />
    </>
  );
}

export default App;
