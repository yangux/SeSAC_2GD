/* 전개연산자 사용해보기 (spread 연산자) */

// 배열에 접근하기
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, "추가한 요소", ...arr2];
console.log(arr3);
console.log(arr4);

// 1-2. 문자열에 전개연산자 사용하기
const str = "hihello";
let strToArr = str.split("");
let strToArr2 = [...str];
console.log(strToArr);
console.log(strToArr2);

console.log(str);
// 문자열도 배열처럼 접근 가능
for (let el of str) {
  console.log(el);
}

// 1-3. 오브젝트에 전개연산자 사용하기
let me1 = {
  name: "allie",
  height: 163,
  married: false,
  friend: null,
};

let me2 = {
  name: "진형",
  like: ["sleeping", "놀기"],
  friend: {
    name: "지윤",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`
    );
  },
};

let me = {
  ...me1,
  ...me2,
  gender: "F",
};

console.log(me);
console.log(me.name);
me.greeting();

// 실습문제
const word1 = "abc";
const word2 = "xyz";
const wordArr = [...word1, ...word2];
const wordArr2 = word1.split("").concat(word2.split(""));
const wordArr3 = (word1 + word2).split("");

console.log(wordArr);
console.log(wordArr2);
console.log(wordArr3);

/* 2. 구조 분해 할당 */

// 2-1. 배열의 구조 분해 할당 - 순서가 중요!
const arr5 = ["tomato", "kiwi", "banana"];
const [val1, kiwi, banana] = arr5; // let val1 = arr5[0]와 같다.
console.log(val1);

const arr6 = ["빨강", "주황", "노랑", "분홍"];
const [red, orange, , pink] = arr6; // 비워둘 수 있음
// 요소보다 선언된 변수의 갯수가 많으면 undefined로 반환
// default 값 선언 가능, 그러나 배열에 값이 있으면 덮어쓰임
const [v1, v2, v3 = "default", v4, v5 = "초록"] = arr6;

console.log(pink);
console.log(v5);
console.log(v3);

// 변수 교환해보기
let value1 = "second";
let value2 = "first";

// temp 이용하는 방법
let temp;
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1, value2);

// 구조분해할당으로 교환하기
value1 = "second";
value2 = "first";
[value1, value2] = [value2, value1];
console.log(value1, value2);

// 2-2. object의 구조 분해 할당 - 순서x, key이름을 그대로 씀
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};
console.log(obj.title);
console.log(obj["title"]);

const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);

// key와 다른 이름으로 할당하는 방법도 가능
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2);

const { key5, key2, ...obj2 } = {
  // key5, key2를 제외한 나머지를 모아서 새로운 객체에 저장 (rest 연산자)
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};

console.log(key2, key5);
console.log(obj2);

/* ...rest */
function test(...val) {
  const [a, b, c, ...rest] = val;
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  console.log(rest); // [4,5,6,7]
}

test(1, 2, 3, 4, 5, 6, 7);

// quiz: 매개변수가 몇 개 들어오든 합해주는 함수 addNumber
function addNumber(...arr) {
  let sum = 0;
  arr.forEach((el) => (sum += el));
  return sum;
}

console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function introduce(name, like = "빵", hate, goodAt) {
  // 매개변수의 default값 설정
  console.log(`내 이름은 ${name}입니다.`);
  console.log(`좋아하는 것은 ${like}입니다.`);
  console.log(`싫어하는 것은 ${hate}입니다.`);
  console.log(`저는 ${goodAt}을 잘합니다.`);
}
introduce();
introduce("a", "b", "c", "d");
