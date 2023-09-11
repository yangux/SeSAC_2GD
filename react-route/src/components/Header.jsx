import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>
          <Link to="/practice">실습문제</Link>
        </li>
      </ul>
    </>
  );
}
