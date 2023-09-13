import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((el) => el.done);
  return (
    <>
      <h1>뿌듯 목록</h1>
      <ul>
        {doneList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </>
  );
}
