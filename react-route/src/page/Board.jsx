import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Board() {
  return (
    <>
      <Header />
      <h1>게시판 페이지입니다.</h1>
      <Link to="/board/1">1번 게시물</Link>
      <Link to="2">2번 게시물</Link>
    </>
  );
}
