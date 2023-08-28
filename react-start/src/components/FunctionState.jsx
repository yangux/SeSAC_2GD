import { useState } from "react";

export default function FunctionState() {
  //  //   let apple = "사과";
  //   const [apple, setApple] = useState("사과");
  //   function inEng() {
  //     const content = document.querySelector(".state .apple");
  //     content.innerText = "apple";
  //     // apple = "apple";
  //     // console.log(apple);
  //   }

  //   return (
  //     <div className="state">
  //       <div className="apple">사과</div>
  //       <div>{apple}</div>
  //       <button onClick={inEng}>영어로 바꾸기</button>
  //       <button onClick={() => setApple("apple")}>
  //         {" "}
  //         useState: 영어로 바꾸기
  //       </button>
  //     </div>
  //   );

  //   function changeLang() {
  //     const apple = document.querySelector(".state div");
  //     apple.innerText === "사과"
  //       ? (apple.innerText = "apple")
  //       : (apple.innerText = "사과");
  //   }
  //   return (
  //     <div className="state">
  //       <div>사과</div>
  //       <button onClick={() => changeLang()}>언어 변경</button>
  //     </div>
  //   );
  const [showEng, setShowEng] = useState(true);
  return (
    <div>
      <div>{showEng ? "apple" : "사과"}</div>
      <button onClick={() => setShowEng(!showEng)}>
        {/* !showEng: true/false 현재 상태와 반대값 */}
        {showEng ? "한글" : "영어"}로 변경
      </button>
      <hr />
    </div>
  );
}
