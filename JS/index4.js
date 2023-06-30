/* 함수 선언문
function 함수이름(매개변수) {
    함수내용;
}
함수이름은 camelCase를 이용!
*/
helloWorld1();
function helloWorld1() {
  console.log("hello world1");
}

helloWorld1();

function helloWorld2() {
  return "hello world2";
}
/* return 
  - 함수의 반환값, 함수 내부 코드의 '최종값'
*/
console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}
add(2, 3);
function add2(num1, num2) {
  return num1 + num2;
}
console.log(add2(2, 5));

// 함수 표현식 - 선언 이후에 호출해주어야 합니다!
const helloWorld3 = function () {
  console.log("hello world 3");
};
helloWorld3();

// 화살표 함수 (== 함수표현식)
// console.log(helloWorld4());
const helloWorld4 = () => {
  return "hello world 4";
};
console.log(helloWorld4());

/* 메개변수가 있는 함수 */
function sayHello1(name) {
  return "안녕, " + name;
}
console.log(sayHello1("수연"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}
sayHello2("좋은 하루 되세요", "수연");

const sayHello3 = function (text, name) {
  console.log(`${text}!! ${name}님`);
};
const sayHello4 = (text, name) => {
  console.log(`${text}!! ${name}님`);
};
sayHello3("안녕", "송송");
sayHello4("행복한 하루", "송송");
