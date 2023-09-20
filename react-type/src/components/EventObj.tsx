export default function EventObj() {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // onClick에 전달되는 함수인지 모르기 때문에 타입을 설정해줘야 함
    console.log(e);
    console.log(e.target);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
    console.log(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
  }
  return (
    <>
      <h2>이벤트 객체 타입 확인</h2>
      <div onClick={(e) => console.log(e)}>onClick</div>{" "}
      {/* onClick에 바로 전달되는 경우 타입 설정하지 않아도 됨 */}
      <div onClick={(event) => handleClick(event)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div>
        onChange:
        <input type="text" onChange={(e) => handleChange(e)} />
      </div>
      <div>
        onKeyDown:
        <input type="text" onKeyDown={(e) => handleKeyDown(e)} />
      </div>
      <span
        onDrag={(e) => handleClick(e)}
        style={{ backgroundColor: "yellowgreen" }}
      >
        drag
      </span>
    </>
  );
}
