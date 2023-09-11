import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigate() {
  const inputRef = useRef();
  const Div = styled.div`
    border: 1px solid black;
    cursor: pointer;
    padding: 4px;
    box-shadow: 0 0 5px #777777aa;
    border-radius: 8px;
    background-color: greenyellow;
  `;

  const navigate = useNavigate();
  const controlProfile = () => {
    // input 값이 5보다 크면 프로필페이지로 이동, 그렇지 않다면 홈페이지로 이동
    if (inputRef.current.value > 5) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "pink",
          justifyContent: "space-evenly",
        }}
      >
        <Div onClick={() => navigate(-1)}>뒤로가기</Div>
        <Div onClick={() => navigate(1)}>앞으로 가기</Div>
        <Div onClick={() => navigate(-2)}>뒤로 두 번 가기</Div>
        <Div onClick={() => navigate("/")}>홈으로 가기</Div>
        <Div onClick={() => navigate("/board")}>보드페이지</Div>
        <Div onClick={() => navigate("/profile")}>프로필 페이지</Div>
      </div>
      <input type="text" ref={inputRef} />
    </>
  );
}
