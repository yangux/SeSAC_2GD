import SetText from "../components/SetText";
import Count from "../components/Count";
import EventObj from "../components/EventObj";
import { PropsType1, PropsType2, Propstype3 } from "../components/PropsType";
import HeaderMenu from "../components/HeaderMenu";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <h1>Lecture page</h1>
      <PropsType1 name="allie" />
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      />
      <Propstype3 width={200} height={200} text="안녕하세요" />
      <hr />
      <Count />
      <hr />
      <SetText />
      <hr />
      <EventObj />
    </>
  );
}
