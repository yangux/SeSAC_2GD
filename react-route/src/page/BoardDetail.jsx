import { useParams } from "react-router-dom";
import img1 from "../assets/pooh1.webp";
import img2 from "../assets/pooh2.jpg";
import NotFound from "../page/NotFound";

// export default function BoardDetail() {
//   const params = useParams();
//   // console.log(params);
//   // params = {boardID: 2}
//   const { boardID } = useParams();
//   return (
//     <>
//       <h2>{boardID}번 게시물입니다.</h2>
//       <h2>{params.boardID}번 게시물입니다.</h2>
//     </>
//   );
// }

export default function BoardDetail() {
  const { boardID } = useParams();
  const boardData = [
    {
      id: 1,
      title: "1번 글",
      content: "1번 내용~~",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "2번 글",
      content: "2번 내용~~",
      imgSrc: img2,
    },
  ];
  //   boardData의 요소인 오브젝트의 id와 parameter가 같은 것 리턴
  //   filter 메소드: 조건에 맞는 요소들만 담은 배열 반환
  const board = boardData.filter((el) => el.id === Number(boardID))[0];
  return board ? (
    <>
      <h1>게시글 {boardID}번</h1>
      <img src={board.imgSrc} alt={`${boardID}번 이미지`} />
      <p>{board.content}</p>
    </>
  ) : (
    <NotFound />
  );
}
