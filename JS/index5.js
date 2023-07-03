/* 자바스크립트가 기본적으로 가지고 있는 객체 */
// String, Number, Array, Date, Math, Object, ...

/* Date 객체 */
// 시간, 날짜 정보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth(), "월"); // 0~11로 가지고 옴
console.log(now.getDate(), "일"); // 1~31
console.log(now.getHours(), "시"); // 0~23
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); //0(일)~6(토)

// Date 객체를 이용해 오늘 요일을 얻고,
// switch문, if문으로 오늘이 평일/주말인지 구별해보자
let day = new Date().getDay();
// switch (day) {
//   case 0:
//   case 6:
//     console.log("주말입니다.");
//     break;
//   default:
//     console.log("평일입니다.");
//     break;
// }
// if (day === 0 || day === 6) {
//   console.log("주말입니다.");
// } else {
//   console.log("평일입니다.");
// }
day === 0 || day === 6 ? console.log("주말") : console.log("평일");

// new Date(y, m, d, h, m, s)
// 시, 분, 초가 설정되지 않았을 때는 00:00:00
let past = new Date(2022, 8, 18, 19, 0, 0);
console.log(past);

/* Math */
// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.max(100, -2, 30, 44));
console.log(Math.min(100, -2, 30, 44));
console.log(Math.ceil(5.1)); // 올림
console.log(Math.floor(5.1)); // 내림
console.log(Math.round(5.1)); // 반올림

// 난수 생성
// 0<= num <1
console.log(Math.random());
// 0<= num <10
console.log(Math.floor(Math.random() * 10));
// 0<= num <=10
console.log(Math.floor(Math.random() * 11));
// 20<= num <=22
//  0<= num < 3 구한 다음 20 더해주기
console.log(Math.floor(Math.random() * 3) + 20);

// Object
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
