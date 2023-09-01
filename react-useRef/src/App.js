// import DOMComponent from "./DOMComponent";
// import Input from "./Input";
// import Game from "./Game";

import ConditionalOne from "./ConditionalOne";
import ConditionalTwo from "./ConditionalTwo";
import EffectComponent from "./EffectComponent";
import RefVarState from "./RefVarState";
import { useState, useRef, useEffect } from "react";
import TestUseEffect from "./TestUseEffect";
// import TimerComponent from "./TimerComponent";
import PracticeTimer from "./PracticeTimer";

function App() {
  const [content, setContent] = useState(1);
  const [show, setShow] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    button.current?.focus();
  });
  return (
    <>
      {/* <DOMComponent />
      <DOMComponent />
      <DOMComponent /> */}
      {/* <Input /> */}
      {/* <Game /> */}
      <RefVarState />
      <hr />
      <button onClick={() => setContent(content === 1 ? 2 : 1)}>클릭</button>
      {content === 1 && <ConditionalOne content={content} />}
      {content === 2 && <ConditionalTwo content={content} />}
      <hr />
      <EffectComponent />
      <hr />
      <TestUseEffect />
      {/* <hr />
      {show && <TimerComponent />}
      <button onClick={() => setShow(!show)}>버튼</button> */}
      <hr />
      <button onClick={() => setShow(!show)} ref={button}>
        {!show ? "보이기" : "숨기기"}
      </button>
      {show && <PracticeTimer />}
    </>
  );
}

export default App;
