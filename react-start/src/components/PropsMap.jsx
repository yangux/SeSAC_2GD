import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
  // console.log(arr);

  return (
    <>
      <h4>가격표</h4>
      {/* <FunctionProps
        name={arr[0].name}
        krPrice={arr[0].krPrice}
        number={arr[0].number}
      /> */}

      {arr?.map((data, index) => {
        // 매개변수의 두번째 인자로 index를 가진다.
        return (
          <FunctionProps
            name={data.name}
            krPrice={data.krPrice}
            number={data.number}
            key={index}
          />
        );
      })}
    </>
  );
}
