export default function FirstPractice() {
  const helloStr = "Hello, first exercise";
  const divStyle = { marginTop: "32px", backgroundColor: "skyblue" };
  return (
    <div onClick={() => alert("클릭 됨")} style={divStyle}>
      {helloStr}
    </div>
  );
}
