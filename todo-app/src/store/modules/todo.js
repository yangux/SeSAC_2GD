const initialState = {
  list: [
    { id: 0, text: "리액트 공부하기", done: false },
    { id: 1, text: "블로그 쓰기", done: false },
    { id: 2, text: "이력서 만들기", done: false },
  ],
};
// id 전역 관리를 위한 initialState.nextID
initialState["nextID"] = initialState.list.length;

// action 정의
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// action 생성함수 작성
export function create(payload) {
  return { type: CREATE, payload };
}
export function done(id) {
  return { type: DONE, id };
}

export function todo(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: state.nextID,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      // 기존 list 에서의 id와 action으로 들어온 id가 같다면
      // done:false -> true
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
