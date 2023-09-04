import MapChild from "./MapChild";

export default function PracticeMap() {
  const items = [
    { item: "PS5", price: "685,000" },
    { item: "에어 프라이어", price: "50,000" },
    { item: "사세 치킨윙", price: "11,500" },
  ];

  return (
    <>
      {/* <MapChild item={items[0].item} price={items[0].price} />
      <MapChild item={items[1].item} price={items[1].price} />
      <MapChild item={items[2].item} price={items[2].price} />
      <hr /> */}
      {items.map((data, index) => {
        return <MapChild item={data.item} price={data.price} key={index} />;
      })}
    </>
  );
}
