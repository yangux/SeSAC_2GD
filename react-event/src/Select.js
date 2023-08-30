function Select(props) {
  const setData = props.setData;
  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          console.log(e);
          const fruit = e.target.value;
          // setFruit(e.target.value);
          // data: state가 이전에 가지고 있던 값
          setData((data) => {
            return { ...data, fruit };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          // setBackground(e.target.value);
          const background = e.target.value;
          // 동기화할 때 값을 미리 불러온 다음 업데이트 해준다. (객체에 key,value 값이 같으면 key값만 써줘도 됨)
          // 리액트에서 setState를 동기화해서 쓰는 것은 좋지 않은 방법이다. => state, setState를 모두 props로 가져오는 방법을 쓴다.
          setData((data) => {
            return { ...data, background };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          const color = e.target.value;
          // setColor(e.target.value);
          setData((data) => {
            return { ...data, color };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white" selected>
          하양
        </option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
