// 오브젝트 생성
/*
    속성:
        만들어진 연도 year
        집의 이름 name
        창문의 개수 window
    함수:
        만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
        창문의 갯수를 콘솔창에 출력하는 함수
*/

class House {
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year}년 지났어요.`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();
console.log("---");

const house2 = new House(2022, "자이", 10);
console.log(house2);
house2.getAge();
house2.getWindow();
console.log("---");

// 상속
/*
    추가할 속성
        층수 floor
        창문 제조업체 windowMaker
    추가할 함수
        아파트 정보를 나타내는 메소드
*/
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window); // 상속 받은 속성
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}.
    총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}.`;
  }

  // overriding(메소드 재정의): 같은 이름의 메소드를 상속받지만 내용을 바꾸고 싶을 때
  getWindow() {
    return `${this.name} 아파트의 창문 ${this.window}개는 ${this.windowMaker}에서 만들었습니다.`;
  }
}

const apt1 = new Apartment(2020, "래미안", 6, 19, "kcc");
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());

// 실습문제
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  // 속성을 추가하지 않으면 constructor를 안써도 됨
  getDiagonal() {
    // 대각선 길이 구하기
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
class Circle extends Shape {
  constructor(width) {
    super(width);
    this.radius = this.width / 2;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

let rec2 = new Rectangle(6, 8);
let tri1 = new Triangle(3, 4);
let cir1 = new Circle(10);
console.log(rec2.getArea(), rec2.getDiagonal());
console.log(tri1.getArea());
console.log(cir1.getArea());
