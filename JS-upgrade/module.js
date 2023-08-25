// 하나만 내보내기
/* 
1. export default 키워드를 앞에 붙이거나
*/

export default function sayHi() {
  console.log("export default 사용");
}

/* 
2. 함수/클래스 선언이 모두 끝난 후에 작성해도 됨 
*/
// function sayHi() {
//   console.log('export default 사용');
// }
// export default sayHi;

/* (주의!)
export default 키워드로 함수 표현식은 내보낼 수 없음
 */
