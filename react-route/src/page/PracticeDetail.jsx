import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PracticeDetail() {
  const { name } = useParams();
  const [nameParams] = useSearchParams();
  const queryName = nameParams.get("name");

  const navi = useNavigate();

  const Strong = styled.span`
    font-weight: bold;
    color: fuchsia;
  `;
  const Btn = styled.button`
    appearance: none;
    text-decoration: none;
    border: 0;
    background-color: lavender;
    padding: 0.5em 1em;
    border-radius: 50px;
    font-size: 14px;
    color: darkblue;
    &:hover {
      background-color: #d9d9ff;
    }
  `;

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p>
        학생의 이름은 <Strong>{name}</Strong>입니다.
      </p>
      {queryName && (
        <p>
          실제 이름은 <Strong style={{ color: "blue" }}>{queryName}</Strong>
          입니다.
        </p>
      )}
      <Btn onClick={() => navi(-1)}>이전 페이지로</Btn>
    </div>
  );
}
