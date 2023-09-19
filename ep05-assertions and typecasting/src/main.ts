//type aliases
type one = string;
type two = string | number;
type three = string;

//convert to more or less specific
let a: one = "hello";
//assertion
let b = a as two; // less specific
let c = a as three; //more specific

let d = <one>"hello again";
let e = <string | number>"volla!";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be carefull with assertion as this is telling typescript there is no problem but we know it will return a string
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//unknown type
// 10 as string => Error
//no error due to unknown
10 as unknown as string;

//dom
const myImg = document.getElementById("#img") as HTMLImageElement;
myImg.src;
