import { useState } from "react";

export default function ChangeObj({ objArr }) {
  //   const [index, setIndex] = useState(0);
  //   const { name, age, nickName } = objArr[index];

  //   function changeMember() {
  //     setIndex(index + 1);
  //     if (index === objArr.length - 1) setIndex(0);
  //   }
  //   return (
  //     <>
  //       <p>이름: {name}</p>
  //       <p>나이: {age}</p>
  //       <p>별명: {nickName}</p>
  //       <button onClick={changeMember}>멤버 바꾸기</button>
  //     </>
  //   );

  // map 써보기
  const [idx, setIdx] = useState(0);
  return (
    <>
      {objArr.map((data, index) => {
        return (
          index === idx && (
            <div key={index}>
              <div>이름: {data.name}</div>
              <div>나이: {data.age}</div>
              <div>별명: {data.nickName}</div>
            </div>
          )
        );
      })}
      <button
        onClick={() => {
          idx === objArr.length - 1 ? setIdx(0) : setIdx(idx + 1);
        }}
      >
        멤버 바꾸기
      </button>
    </>
  );
}
