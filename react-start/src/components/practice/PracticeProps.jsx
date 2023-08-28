import ListChild from "./ListChild";

export default function PracticeProps() {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <ListChild tit="리액트 공부하기" content="state 사용법 익히기" />
      <ListChild tit="블로그 쓰기" content="블로그 2개 쓰기!!" />
      <ListChild tit="코딩테스트 대비" content="프로그래머스 시작하기" />
    </div>
  );
}
