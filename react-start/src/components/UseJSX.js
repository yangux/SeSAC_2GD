export default function UseJSX() {
  /* 1. inline style 적용해보기 
        - inline에 바로 속성 적용
        - object 선언 후 적용
    */
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gold",
  //     border: "1px solid #444",
  //     marginLeft: ".5rem",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: "fff", width: "100px", backgroundColor: "violet" }}>
  //         first
  //       </div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //     </div>
  //   );

  /* 2. JS 문법 써보기 */
  //   let isShow = true;
  //   let str;
  //   if (isShow === true) {
  //     str = "true입니다";
  //   }
  //   return (
  //     <div>
  //       {/* true일 때 보이는 div */}
  //       <div style={{ backgroundColor: "tomato" }}>
  //         {isShow ? "true일 때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "orange" }}>
  //         {isShow && "true일 때 보임"}
  //       </div>
  //       {/* false일 때 보이는 div */}
  //       <div style={{ backgroundColor: "blue" }}>
  //         {isShow ? "" : "false일 때 보임"}
  //       </div>
  //       <div style={{ backgroundColor: "slateblue" }}>
  //         {!isShow && "false일 때 보임"}
  //       </div>
  //       {/* if문과 for문은 jsx 문법 내에서 사용 금지! */}
  //       <div>{str}</div>
  //     </div>
  // );

  /* 3. onClick 사용 */
  const myName = "수연";

  // 매개 변수 없는 ver.
  function myFunc() {
    alert(`안녕, 내 이름은 ${myName}이야`);
  }

  // 매개 변수 있는 ver.
  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      <span onClick={myFunc}>hi</span>
      <span onClick={() => addNum(5, 8)}>8 더하기 5</span>
      <span onClick={() => myFunc()}>hi2</span>
    </div>
  );
}
