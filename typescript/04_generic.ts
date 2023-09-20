function printSome<T>(x: T): T {
  return x;
}

console.log(printSome<string>("hi"));
console.log(printSome<boolean>(true));
console.log(printSome<number[]>([1, 2, 3, 4, 5]));

function printSome2<T>(x: T, y: T): void {
  console.log(x, y);
}

printSome2<number>(1, 2);
printSome2<string>("1", "2");

function printSome3<T, K>(x: T, y: K): void {
  console.log(x, y);
}

printSome3<string, boolean>("hi", true);

const arrLength = <T>(arr: T[]): number => {
  return arr.length;
};
const arr1 = [1, 2, 3, 5, 6]; // number[]
const arr2 = ["pineapple", "mango"]; // string[]
const arr3 = [[12, 13], [20, 21], [10]]; // number[number[]]

console.log(arrLength<number>(arr1));
console.log(arrLength<string>(arr2));
console.log(arrLength<number[]>(arr3));

// 실습
const arrElement = <T>(arr: T[], index: number): T | boolean => {
  return index < arr.length ? arr[index] : false;
};
console.log(arrElement(["a", "b", "c"], 4));
console.log(arrElement([true, false], 0));
