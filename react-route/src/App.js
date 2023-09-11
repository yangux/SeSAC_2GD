import { Routes, Route } from "react-router-dom";
import Profile from "./page/Profile";
import Board from "./page/Board";
import Index from "./page/Index";
import NotFound from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";
import Practice from "./page/Practice";
import PracticeDetail from "./page/PracticeDetail";

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/profile">프로필</a>
          </li>
          <li>
            <a href="/board">게시판</a>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
        <Route path="/student" element={<Practice />}></Route>
        <Route path="/student/:name" element={<PracticeDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
