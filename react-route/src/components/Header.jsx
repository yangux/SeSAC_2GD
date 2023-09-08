import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <a href="/board">게시판</a>
        </li>
      </ul>
    </nav>
  );
}
