/* commonJS의 exports.~ 처럼
내보내고 싶은 함수나 변수에 export 키워드를 붙이는 방법
*/

export const animals = ["dog", "cat"];
export function showAnimals() {
  animals.forEach((el) => console.log(el));
}
