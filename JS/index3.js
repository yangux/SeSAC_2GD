/* 변수
  - var
    - 중복선언(재선언)이 가능
    - 예기치 못한 값을 반환할 수 있다.
  - let
    - 중복 선언은 불가능하지만 재할당은 가능
  - const
    - 재선언이 불가능하고, 재할당도 불가능
    - 선언과 동시에 초기화를 해야한다.
*/
var name = "홍길동";
console.log(name);
var name = "나비";
console.log(name);

let a;
console.log(a);
a = 10;
console.log(a);

const b = 1;
// b = 11; 재할당 불가

let q = 10;
q = q - 5; // 값을 바꾸려면 재할당 해야 함
console.log(q);

/* 연산자
산술연산자: +, -, *, /
대입연산자: =
비교연산자: ==, ===, !=, !==, <, >, <=, >=
논리연산자: !(not), &&(and), ||(or)
*/

console.log(1 == 1);
console.log(1 == "1");
console.log(1 != 1);
// console.log(1 != "1");
console.log(1 === "1");

// 크기 비교(>, <, <=, >=)
console.log(1 < 2);
console.log(1 > 2);
console.log(1 >= 2);

// 산술 연산
console.log(1 + 1);
console.log(5 - 1);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);

//  논리 연산
console.log(!true);
console.log(!!true);
console.log(true || true);
console.log(true || false || false);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log((2 > 1 && -2 < 1) || 5 < 2);

console.log("" == "0");
console.log("" == 0);
console.log(false == "0");
console.log(0 == "0");
console.log(undefined == null);
