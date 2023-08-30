import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "안녕하세요",
  });
  // const [fruit, setFruit] = useState("apple");
  // const [background, setBackground] = useState("black");
  // const [color, setColor] = useState("white");
  // const [content, setContent] = useState("안녕하세요");
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result data={data} />
      </div>
    </>
  );
}

export default App;
