//type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
  name: string;
  isActive: boolean;
  albums: stringOrNumberArray;
};

//interfaces
// but this is not possible with interfaces
//error
//interface PostId = stringOrNumber

//litral types

let myName: "vipin";
//error
// myName = 'jimmy'
let userName: "vipin" | "joey" | "chandler";
//error
// userName = 'VJ'
// userName = "VIPIN";

const add = (a: number, b: number): number => {
  return a + b;
};

const log = (message: any): void => {
  console.log(message);
};

const subtract = function (a: number, b: number): number {
  return a - b;
};

//type
type mathFunction = (a: number, b: number) => number;
//interface
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply: mathFunction = function (c, d) {
  return c * d;
};

log(multiply(2, 2));

//type guard, optional parameter
//part1
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  } else {
    return a + b;
  }
};
//part2
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

log(addAll(2, 2));
log(addAll(2, 2, 2));
log(sumAll(2, 2));
log(sumAll(2, 2, 2));
//we have to pass undefined because
log(sumAll(undefined, 2));

//Rest parameters means (rest of the parameters)
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
//didn't send the array but it will represent it as array
log(total(1, 2, 3, 4, 5));

//never type, when we explicitely throw error
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//without check type was never , with check it becomes void
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom typeguard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//undefined return or use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
