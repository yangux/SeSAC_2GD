import { useEffect, useState } from "react";
export default function EffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Run useeffect");
  }, []); // 생성될 때 (mount)
  useEffect(() => {
    console.log("Change count");
  }, [count]); // 베열에 보낸 값이 변경될 때마다 (update)
  useEffect(() => {
    return () => {
      // 화면에서 컴포넌트가 사라질 때 (unmount)
      console.log("Remove component");
    };
  }, []);
  return (
    <>
      EffectComponent
      <br />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
