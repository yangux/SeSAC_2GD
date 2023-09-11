import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function PracticeNav() {
  const Nav = styled.nav`
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: aliceblue;
    list-style: none;
    display: flex;
    justify-content: end;
  `;
  const MyLink = styled(Link)`
    color: cornflowerblue;
    font-family: sans-serif;
    font-weight: bold;
    margin-right: 10px;
    text-decoration: none;
    &:hover {
      color: lightblue;
    }
  `;

  return (
    <>
      <Nav>
        <MyLink to="/student/sean">학생</MyLink>
        <MyLink to="/student/codingon">코딩온</MyLink>
        <MyLink to="/student/new?name=jisu">쿼리 이용</MyLink>
      </Nav>
    </>
  );
}
