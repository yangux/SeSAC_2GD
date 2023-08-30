function Result(props) {
  const { fruit, background, color, content } = props.data;

  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} alt={fruit} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
