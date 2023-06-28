console.log(`"${typeof 3}" isn't "${typeof "3"}" data type.`);
console.log(
  `typeof를 Array이나 null에 사용하면, "${typeof []}" 결과를 얻을 수 있습니다.`
);

let mathScore = prompt("math score?");
let engScore = prompt("english score?");
mathScore = Number(mathScore);
engScore = Number(engScore);
avgScore = (mathScore + engScore) / 2;
console.log(avgScore);
