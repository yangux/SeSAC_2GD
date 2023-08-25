// 파일 전체를 받아와서 하나의 변수에 오브젝트로 저장하는 방법
// 파일 내부의 변수, 함수 등에 접근할 때는
// 오브젝트에 접근하는 것처럼 module1.변수, module1.함수로 접근
const module1 = require("./commonJS_module.js");

console.log(module1);
console.log(module1.colors);

const soojung = new module1.Person("수정", 20);
console.log(soojung);

// 객체의 구조분해 할당을 이용해서
// 점 접근이 아닌 함수나 변수에 바로 접근할 수 있습니다.
const { sayName } = require("./commonJS_module.js");
const { sayName2, sayhi2 } = require("./commonJS_module2.js");
sayName("allie");

sayName2("진형");
sayhi2();

/* 통상적으로 require은 맨 위에 한번에 몰아서 작성하는게 좋습니다! */
