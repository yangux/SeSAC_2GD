import UseJSX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import ClassCom from "./components/ClassCom";
import FunctionState from "./components/FunctionState";
import ClassState from "./components/ClassState";
import PracticeState from "./components/practice/PracticeState";
import FunctionProps from "./components/FunctionProps";
import PracticeProps from "./components/practice/PracticeProps";
import { ClassProps, ClassProps2 } from "./components/practice/ClassProps";

function App() {
  return (
    <div>
      <UseJSX />
      <FirstPractice />
      <ClassCom />
      <FunctionState />
      <ClassState />
      <PracticeState />
      <FunctionProps name="사과" krPrice={5000} number={10} />
      <FunctionProps name="샤인머스캣" krPrice={35000} number={3} />
      <FunctionProps name="복숭아" />
      <FunctionProps>여기가 children입니다.</FunctionProps>
      <PracticeProps />
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cd" />
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095" />
    </div>
  );
}

export default App;
