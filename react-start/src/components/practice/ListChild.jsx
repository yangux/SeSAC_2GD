export default function ListChild(props) {
  const { tit, content } = props;
  return (
    <div>
      <h2>{tit}</h2>
      <p>{content}</p>
      <hr />
    </div>
  );
}

ListChild.defaultProps = {
  tit: "할 일",
  content: "내용",
};
