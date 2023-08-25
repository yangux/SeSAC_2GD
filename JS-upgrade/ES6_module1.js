const flowers = ["rose", "sunflower", "tulip"];

function getFlowers(idx) {
  if (idx >= flowers.length || idx < 0) return "잘못된 index";
  return flowers[idx];
}

// ES6에서 module을 한번에 내보내는 방법
// export { flowers, getFlowers };

// as 이용: 별칭으로 내보내기
export { flowers as flr, getFlowers as getFlr };
