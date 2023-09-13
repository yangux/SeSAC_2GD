import { useSelector, useDispatch } from "react-redux";
import { create, done } from "../store/modules/todo";
import { useRef } from "react";
import { handleInput } from "../utils/eventHandle";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list).filter((el) => !el.done);
  const dispatch = useDispatch();
  const input = useRef();
  const btn = useRef();
  const nextId = useSelector((state) => state.todo.nextID);

  return (
    <>
      <h1>산더미 목록</h1>
      <input
        type="text"
        ref={input}
        onKeyDown={(e) => handleInput(e, btn.current)}
      />
      <button
        ref={btn}
        onClick={() => {
          input.current.value.trim() &&
            dispatch(create({ id: nextId, text: input.current.value }));
          input.current.value = "";
        }}
      >
        추가
      </button>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
