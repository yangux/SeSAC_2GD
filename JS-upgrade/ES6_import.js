// import { flowers, getFlowers } from "./ES6_module1.js";
import { flr, getFlr } from "./ES6_module1.js";

console.log(flr[0]);
console.log(getFlr(4));

/* 
 한 번에 가져오는 방법은 메모리 효율, 처리 속도 측면에서 좋지 않습니다.
되도록이면 모듈에서 어떤 데이터, 어떤 함수를 사용할건지 명시하는 것이 좋아요!
*/
// import * as animals from "./ES6_module2.js";
// animals.showAnimals();

// object 구조 분해 할당으로 함수와 변수를 가지고 옴
import { showAnimals, animals } from "./ES6_module2.js";
console.log(animals[1]);
showAnimals();

import sayHi from "./module.js";
sayHi();

import showName from "./human.js";
showName();

// import 도 마찬가지로 통상적으로는 맨 위에 몰아서 써주는게 좋습니다!!
