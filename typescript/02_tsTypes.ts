/* Tuple
    tuple = 배열
    - 길이와 타입이 지정되어있는 배열
*/

let drink: [string, string] = ["콜라", "사이다"];
drink[0] = "cola";
console.log(drink);
// drink[1]= 2; string 요소를 number로 바꾸려고 한다면 error!
drink.push("str");
console.log(drink);

let drink2: readonly [string, number] = ["콜라", 2500];
// drink2.push("사이다");
// drink2[0] = "cola";
console.log(drink2[0]);

/* Enum */
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
console.log(Auth.admin, Auth.user, Auth.guest);

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Cafe.americano, Cafe.latte);

enum Cake { // 아무것도 할당하지 않으면 0부터 1씩 증가
  choco, //0
  vanilla = 10,
  strawberry, //11
}

console.log(Cake.choco, Cake.vanilla, Cake.strawberry);

// olimpic_newgame[1] = false;를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
let olimpic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성 계주" },
  true,
];
// olimpic_newgame[1] = false;

/* Interface & type */
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "jh",
  isPassed: true,
};

type Score = "A+" | "A" | "B" | "C" | "D" | "F";
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number;
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  1: "A",
  2: "A+",
  3: "F",
};

otani.position = "투수";
otani["1"] = "B"; // 대괄호 접근법 사용
console.log(otani);

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {
    console.log("이름은" + this.name + "입니다.");
  },
  color: "blue",
  price: 50000,
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "Daniel",
  gender: "Female",
  age: 20,
};

type Gender = "Female" | "Male";
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "알버트 덤블도어",
  gender: "Male",
};
console.log(albert);

// 실습

type Category = "액션" | "모험" | "롤플레잉" | "스릴러" | "호러";
type Platform = "모바일" | "웹" | "콘솔";
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: Platform;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
console.log(heroGame_A, heroGame_B);
