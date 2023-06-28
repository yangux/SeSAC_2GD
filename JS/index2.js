console.log("안녕하세요");
// alert("안녕하세요!");
// confirm("js 재밌지 않나요?");
// prompt("당신의 이름은?");

/* 1. String(문자열) */
let myName = "수연";
let myCity = "seoul";
console.log(myName);
// 내 이름은 수연이고, 사는 곳은 seoul 입니다.
console.log("내 이름은", myName, "이고, 사는 곳은", myCity, "입니다.");
console.log("내 이름은 " + myName + "이고, 사는 곳은 " + myCity + " 입니다.");
console.log(`내 이름은 ${myName}이고, 사는 곳은 ${myCity} 입니다.`);

let myInfo1 = "내 이름은 " + myName + "이고, 사는 곳은 " + myCity + " 입니다.";
let myInfo2 = `내 이름은 ${myName}이고, 사는 곳은 ${myCity} 입니다.`;
console.log(myInfo1);
console.log(myInfo2);

/* 2. Number */
// 연산 가능
let num1 = 100;
let num2 = 3.14;
console.log(num1 + num2);
console.log(myName + num1); // 숫자와 문자열의 덧셈 => 문자열로 형변환되어 연결됨
console.log(myName - num1); // 숫자와 문자열의 뺄셈 => NaN(Not a Number)

/* 3. Boolean */
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

/* undefined */
let undef;
console.log(undef);

/* Null */
let empty = null;
console.log(empty);

/* 5. Array(배열) */
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

// 이차원 배열: 배열 안에 배열이 있는 형태
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];
console.log(kr[0][1]);
console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

/* 6. Object */
// 배열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
};
// 점 표기법
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
// 대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);
cat["gender"] = "F";
console.log(cat);
cat["parent"] = ["mom", "dad"];
console.log(cat);
console.log(cat.parent[0]);

console.log("-----typeof------");
let und;
console.log(typeof "문자");
console.log(typeof 324);
console.log(typeof true);
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof und);
console.log(typeof function () {});

/* 형변환 */
// let likeNum = prompt("가장 좋아하는 숫자는?");
// console.log(likeNum, typeof likeNum); // prompt는 모든 값을 string으로 받는다.
// likeNum = Number(likeNum);
// console.log(likeNum + 10);

// 1. 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

// 2. 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123;
let n4 = "3.14";

console.log(Number(n1)); // ture -> 1
console.log(Number(n2)); // false -> 0
console.log(typeof Number(n3));
console.log(Number(n4));

console.log(parseInt(n4)); // 정수형 변경(소수점 이하 버림)
let n5 = parseInt(n4);
