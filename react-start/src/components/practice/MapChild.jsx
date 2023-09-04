export default function MapChild({ item, price }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>품목명: {item}</h3>
      <div>가격: {price} 원</div>
    </div>
  );
}
