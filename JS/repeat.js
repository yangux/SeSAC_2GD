/* 
for문
for(변수 초기화; 조건식(어디까지 증가?감소?); 증감식) {
    반복할 코드;
}
증가식: index++; (=) index = index+1 (=) index+=1
*/

for (let i = 0; i < 10; i = i + 1) {
  //   console.log(i);
  console.log("안녕");
}
for (let i = 0; i < 10; i++) {
  //   console.log(i);
  console.log("안녕");
}
for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

// 1~5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1~n 까지 더하는 프로그램
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// 배열과 for문 같이 써보기
let fruits = ["사과", "망고", "수박", "바나나"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`I like ${fruits[i]}`);
}

// 배열에 들어가 있는 Number형 데이터의 합 구하기
let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
}
console.log(numSum);

/* if문과 for문 같이 쓰기 */
for (i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (i = 0; i < 21; i += 2) {
  // 짝수 뽑을 때 if문 안쓰는 방향으로 하는게 좋음
  console.log(i);
}

console.log("===");
// 10000 까지의 숫자 중
// 13의 배수면서 홀수인 숫자 찾기
// for (let i = 1; i <= 10000; i += 2) {
//   if (i % 13 === 0) {
//     console.log(i);
//   }
// }
for (let i = 0; i < 10000; i += 13) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
